import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { UpscaleConfig } from '../../../../projects/storefrontapp/src/app/upscale/config/upscale.config';

@Injectable({
  providedIn: 'root',
})
export class StylingConnectorService {
  constructor(protected http: HttpClient, protected config: UpscaleConfig) {}

  protected experience$ = new BehaviorSubject(null);

  private tmp$ = this.http
    .get(
      `${this.config.upscale?.baseUrl}/consumer/content-repository/experiences/${this.config.upscale?.experienceId}?expand=`
      // components
    )
    .pipe(
      take(1)
      // tap((style) => console.log(style))
    );

  styling$ = this.tmp$.pipe(
    tap(console.log),
    filter((data) => Boolean(data)),
    map((experience: any) => experience.stylingAttributes)
  );

  load() {
    this.tmp$.subscribe((experience: any) => this.experience$.next(experience));
  }
}
