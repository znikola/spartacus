import { getSystemPath } from '@angular-devkit/core';
import { TempScopedNodeJsSyncHost } from '@angular-devkit/core/node/testing';
import { HostTree, Tree } from '@angular-devkit/schematics';
import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as shx from 'shelljs';
import { runMigration, writeFile } from '../../../shared/utils/test-utils';

const MIGRATION_SCRIPT_NAME = 'migration-v2-config-deprecations-09';
const TEST_CLASS = `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      featureModules: {
        textfield: {
        module: () => import('@spartacus/product-configurator/textfield').then(
          (m) => m.TextfieldConfiguratorModule
        ),
        },
        rulebased: {
          module: () => import('@spartacus/product-configurator/rulebased').then(
          (m) => m.RulebasedConfiguratorModule
        ),
        },
      },
      backend: {
        occ: {
          baseUrl: 'https://spartacus-devci767.eastus.cloudapp.azure.com:9002'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.1'
      }
    }),
    RulebasedConfiguratorRootModule,
    TextfieldConfiguratorRootModule
  ],
  providers: [
    provideConfig({
      i18n: {
        resources: configuratorTranslations,
        chunks: configuratorTranslationChunksConfig,
      },
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

const TEST_CLASS_AFTER_MIGRATION = `
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      featureModules: {
// TODO:Spartacus - 'textfield' has been has been replaced with 'productConfiguratorTextfield' .
        textfield: {
        module: () => import('@spartacus/product-configurator/textfield').then(
          (m) => m.TextfieldConfiguratorModule
        ),
        },
// TODO:Spartacus - 'rulebased' has been has been replaced with 'productConfiguratorRulebased' .
        rulebased: {
          module: () => import('@spartacus/product-configurator/rulebased').then(
          (m) => m.RulebasedConfiguratorModule
        ),
        },
      },
      backend: {
        occ: {
          baseUrl: 'https://spartacus-devci767.eastus.cloudapp.azure.com:9002'
        }
      },
      context: {
        currency: ['USD'],
        language: ['en'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.1'
      }
    }),
    RulebasedConfiguratorRootModule,
    TextfieldConfiguratorRootModule
  ],
  providers: [
    provideConfig({
      i18n: {
        resources: configuratorTranslations,
        chunks: configuratorTranslationChunksConfig,
      },
    })],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

describe('config deprecations migration', () => {
  let host: TempScopedNodeJsSyncHost;
  let appTree = Tree.empty() as UnitTestTree;
  let schematicRunner: SchematicTestRunner;
  let tmpDirPath: string;
  let previousWorkingDir: string;

  beforeEach(() => {
    schematicRunner = new SchematicTestRunner(
      'test',
      require.resolve('../../test/migrations-test.json')
    );
    host = new TempScopedNodeJsSyncHost();
    appTree = new UnitTestTree(new HostTree(host));

    writeFile(
      host,
      '/tsconfig.json',
      JSON.stringify({
        compilerOptions: {
          lib: ['es2015'],
        },
      })
    );
    writeFile(
      host,
      '/angular.json',
      JSON.stringify({
        projects: {
          'spartacus-test': {
            sourceRoot: 'src',
            test: {
              architect: {
                build: { options: { tsConfig: './tsconfig.json' } },
              },
            },
          },
        },
      })
    );

    previousWorkingDir = shx.pwd();
    tmpDirPath = getSystemPath(host.root);

    // Switch into the temporary directory path. This allows us to run
    // the schematic against our custom unit test tree.
    shx.cd(tmpDirPath);
  });

  afterEach(() => {
    shx.cd(previousWorkingDir);
    shx.rm('-r', tmpDirPath);
  });

  it('migrate', async () => {
    writeFile(host, '/src/index.ts', TEST_CLASS);

    await runMigration(appTree, schematicRunner, MIGRATION_SCRIPT_NAME);

    const content = appTree.readContent('/src/index.ts');

    expect(content).toEqual(TEST_CLASS_AFTER_MIGRATION);
  });
});
