import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StoryData } from './storybook.model';
import { StorybookService } from './storybook.service';

@Component({
  selector: 'upscale-storybook',
  templateUrl: 'storybook.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StorybookService],
})
export class StorybookComponent implements AfterViewInit {
  ready$ = new BehaviorSubject(false);
  template: TemplateRef<any>;

  @ViewChild('slider', { read: TemplateRef }) slider: TemplateRef<any>;
  @ViewChild('stacked', { read: TemplateRef }) stacked: TemplateRef<any>;

  @HostBinding('class') layout: string;

  layout$ = this.ready$.pipe(
    switchMap(() =>
      this.storybookService.getLayout().pipe(
        map((layout) => {
          return {
            ...layout,
            template:
              layout.layoutBehaviorStyle === 'SLIDER'
                ? this.slider
                : this.stacked,
          };
        })
      )
    )
  );

  // _storybooks$: Observable<StoryBookData[]> = this.ready$.pipe(
  //   filter((ready) => Boolean(ready)),
  //   switchMap(() =>
  //     this.layout$.pipe(
  //       switchMap(() =>
  //         this.storybookService.data$.pipe(
  //           // tap((data) => console.log('storybookService data', data)),
  //           map((data) =>
  //             data.contentIds.map(
  //               (id) =>
  //                 ({
  //                   id,
  //                   // this.storybookService.getStorybookItems(id)
  //                 } as StoryData)
  //             )
  //           )
  //         )
  //       )
  //     )
  //   )
  // );

  // public storybookItems$ = this.storybookService.getStorybookItems();

  headline$ = this.storybookService.headline$;
  subHeadline$ = this.storybookService.subHeadline$;

  storybooks$ = this.storybookService.getStoryBooks();

  constructor(protected storybookService: StorybookService) {}

  getStoryBooks(): Observable<string[]> {
    // console.log('get story books');
    return this.storybookService.getStoryBooks();
  }

  getStories(storybookId: string, layout?): Observable<StoryData[]> {
    return this.storybookService.getStories(storybookId, layout);
    // .pipe(tap(console.log));
  }

  getSliderItems(storybookId: string): Observable<Observable<StoryData>[]> {
    // console.log('get slider items?', storybookId);
    return this.getStories(storybookId).pipe(
      map((stories) => stories.map((storyId) => of(storyId)))
    );
  }

  ngAfterViewInit() {
    this.ready$.next(true);
  }

  getStoryBookItems(storybookId: string): Observable<Observable<string>[]> {
    return this.storybookService.getStorybookItems(storybookId);
  }
}
