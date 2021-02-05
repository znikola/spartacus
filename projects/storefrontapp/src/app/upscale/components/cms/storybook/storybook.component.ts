import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { StoryBookData, StoryData } from './storybook.model';
import { StorybookService } from './storybook.service';

@Component({
  selector: 'upscale-storybook',
  templateUrl: 'storybook.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [StorybookService],
})
export class StorybookComponent implements OnInit, AfterViewInit {
  ready$ = new BehaviorSubject(false);
  template: TemplateRef<any>;

  @ViewChild('slider', { read: TemplateRef }) slider: TemplateRef<any>;
  @ViewChild('stacked', { read: TemplateRef }) stacked: TemplateRef<any>;

  @HostBinding('class') layout: string;

  layout$ = this.ready$.pipe(
    switchMap(() =>
      this.storybookService.getLayout().pipe(
        map((layout) => {
          console.log('layout', layout);
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

  _storybooks$: Observable<StoryBookData[]> = this.ready$.pipe(
    filter((ready) => Boolean(ready)),
    switchMap(() =>
      this.layout$.pipe(
        switchMap(() =>
          this.storybookService.data$.pipe(
            tap((data) => console.log('storybookService data', data)),
            map((data) =>
              data.contentIds.map(
                (id) =>
                  ({
                    id,
                    // this.storybookService.getStorybookItems(id)
                  } as StoryData)
              )
            )
          )
        )
      )
    )
  );

  // public storybookItems$ = this.storybookService.getStorybookItems();

  constructor(protected storybookService: StorybookService) {
    console.log('___construct storybook_____');
  }

  ngOnInit() {
    console.log('___Init_____');
  }
  getStoryBooks(): Observable<string[]> {
    return this.storybookService.getStoryBooks();
  }

  getStories(storybookId: string, layout?): Observable<StoryData[]> {
    return this.storybookService.getStories(storybookId, layout);
  }

  getSliderItems(storybookId: string): Observable<Observable<StoryData>[]> {
    return this.getStories(storybookId).pipe(
      map((stories) => stories.map((storyId) => of(storyId)))
    );
  }

  ngAfterViewInit() {
    console.log('___AfterViewInit_____');
    this.ready$.next(true);
  }

  getStoryBookItems(storybookId: string): Observable<Observable<string>[]> {
    return this.storybookService.getStorybookItems(storybookId);
  }

  getContent(id: string): Observable<any> {
    return this.storybookService
      .getContent(id)
      .pipe(tap((content) => console.log(id, content)));
  }

  getStoryContent(contentId: string): Observable<any> {
    return this.storybookService.getContent(contentId).pipe(
      tap((content) => {
        if (!(content.imageUrl || content.heroImageUrl)) {
          console.log('no image for', content);
        }
      })
    );
  }
}
