import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TestService {
  public spikeSubject$$ = new Subject();
  public readonly spikeSubject$ = this.spikeSubject$$.asObservable();

  constructor(zone: NgZone) {
    window['zone'] = zone;
  }
}
