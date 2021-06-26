import { TestBed } from '@angular/core/testing';
import { Config, ConfigInitializer, RootConfig } from '@spartacus/core';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CONFIG_INITIALIZER_FORROOT_GUARD } from './config-initializer';
import { ConfigInitializerService } from './config-initializer.service';

const MockConfig = {
  test: 'test',
  scope1: 'notFinal',
} as Config;

const configInitializers = [
  {
    scopes: ['scope1'],
    configFactory: async () => ({ scope1: 'final' } as Config),
  },
  {
    scopes: ['scope2.nested'],
    configFactory: async () => ({ scope2: { nested: true } } as Config),
  },
];

describe('ConfigInitializerService', () => {
  let service: ConfigInitializerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Config, useValue: MockConfig },
        { provide: CONFIG_INITIALIZER_FORROOT_GUARD, useValue: true },
      ],
    });
    service = TestBed.inject(ConfigInitializerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when no config initializers are present', () => {
    beforeEach(() => {
      service.initialize();
    });

    it('should get final config', async () => {
      expect(await service.getStableConfig()).toEqual(MockConfig);
    });

    it('should get final config for any scope', async () => {
      expect(await service.getStableConfig('scope1', 'scope2.nested')).toEqual(
        MockConfig
      );
    });
  });

  describe('with config initializers', () => {
    beforeEach(() => {
      service.initialize(configInitializers);
    });

    it('initializers should contribute to final config', async () => {
      const config: any = await service.getStableConfig();
      expect(config.scope1).toEqual('final');
      expect(config.scope2.nested).toBeTruthy();
    });

    describe('getStable should return correct config for scope', () => {
      it('scope1', (done) => {
        service.getStable('scope1').subscribe((config: any) => {
          expect(config.scope1).toEqual('final');
          done();
        });
      });

      it('scope2', (done) => {
        service.getStable('scope2').subscribe((config: any) => {
          expect(config.scope2).toEqual({ nested: true });
          done();
        });
      });

      it('scope2.nested', (done) => {
        service.getStable('scope2.nested').subscribe((config: any) => {
          expect(config.scope2).toEqual({ nested: true });
          done();
        });
      });

      it('scope2.nested.even.more', (done) => {
        service
          .getStable('scope2.nested.even.more')
          .subscribe((config: any) => {
            expect(config.scope2).toEqual({ nested: true });
            done();
          });
      });

      it('scope1, scope2', (done) => {
        service.getStable('scope1', 'scope2').subscribe((config: any) => {
          expect(config.scope1).toEqual('final');
          expect(config.scope2).toEqual({ nested: true });
          done();
        });
      });
    });

    describe('getConfigStable should return correct config for scope', () => {
      it('scope1', async () => {
        const config: any = await service.getStableConfig('scope1');
        expect(config.scope1).toEqual('final');
      });

      it('scope2', async () => {
        const config: any = await service.getStableConfig('scope2');
        expect(config.scope2).toEqual({ nested: true });
      });

      it('scope2.nested', async () => {
        const config: any = await service.getStableConfig('scope2.nested');
        expect(config.scope2).toEqual({ nested: true });
      });

      it('scope2.nested.even.more', async () => {
        const config: any = await service.getStableConfig(
          'scope2.nested.even.more'
        );
        expect(config.scope2).toEqual({ nested: true });
      });

      it('scope1, scope2', async () => {
        const config: any = await service.getStableConfig('scope1', 'scope2');
        expect(config.scope1).toEqual('final');
        expect(config.scope2).toEqual({ nested: true });
      });
    });

    it('getStable should fulfil gradually', (done) => {
      const results: string[] = [];

      const scope2 = service
        .getStable('scope2')
        .pipe(tap(() => results.push('scope2')));

      const stable = service
        .getStable()
        .pipe(tap(() => results.push('stable')));

      const scope1 = service
        .getStable('scope1')
        .pipe(tap(() => results.push('scope1')));

      forkJoin([scope2, stable, scope1]).subscribe(() => {
        expect(results).toEqual(['scope1', 'scope2', 'stable']);
        done();
      });
    });

    it('getConfigStable should fulfil gradually', async () => {
      const results: string[] = [];

      const scope2 = async () => {
        await service.getStableConfig('scope2');
        results.push('scope2');
      };
      const stable = async () => {
        await service.getStableConfig();
        results.push('stable');
      };
      const scope1 = async () => {
        await service.getStableConfig('scope1');
        results.push('scope1');
      };

      await Promise.all([scope2(), stable(), scope1()]);

      expect(results).toEqual(['scope1', 'scope2', 'stable']);
    });

    describe('Config tokens', () => {
      it('should contribute to global Configuration token', async () => {
        await service.getStableConfig();
        const config: any = TestBed.inject(Config);
        expect(config.scope1).toEqual('final');
        expect(config.scope2.nested).toBeTruthy();
      });
      it('should contribute to Root Configuration token', async () => {
        await service.getStableConfig();
        const config = TestBed.inject(RootConfig);
        expect(config.scope1).toEqual('final');
        expect(config.scope2.nested).toBeTruthy();
      });
    });
  });

  it('should fail if one initializer will fail', async () => {
    let failed;
    try {
      await service.initialize([
        ...configInitializers,
        {
          scopes: ['test'],
          configFactory: () => Promise.reject('error'),
        },
      ]);
    } catch (e) {
      failed = e;
    }
    expect(failed).toEqual('error');
  });

  it('should fail with incorrect initializers', async () => {
    let initFailed;
    try {
      await service.initialize([{} as ConfigInitializer]);
    } catch (e) {
      initFailed = e;
    }
    expect(initFailed).toBeTruthy();
    expect(initFailed.message).toEqual(
      'CONFIG_INITIALIZER should provide scope!'
    );
  });

  describe('should warn for duplicate scopes', async () => {
    function getInitializersForScopes(...scopes) {
      return scopes.map((scope) => ({
        scopes: scope,
        configFactory: async () => ({}),
      }));
    }

    const duplicateWarn =
      'More than one CONFIG_INITIALIZER is initializing the same config scope.';

    beforeEach(() => {
      spyOn(console, 'warn');
    });

    it('scope1, scope1', async () => {
      await service.initialize(
        getInitializersForScopes(['scope1'], ['scope1'])
      );
      expect(console.warn).toHaveBeenCalledWith(duplicateWarn);
    });

    it('scope1, scope1.nested', async () => {
      await service.initialize(
        getInitializersForScopes(['scope1'], ['scope1.nested'])
      );
      expect(console.warn).toHaveBeenCalledWith(duplicateWarn);
    });
  });
});
