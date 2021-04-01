import { Injectable } from '@angular/core';
import { CmsService } from '@spartacus/core';
import {
  BREAKPOINT,
  BreakpointService,
  CmsComponentData,
} from '@spartacus/storefront';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { StorybookComponentModel, StoryData } from './storybook.model';
import { chunkArray } from './storybook.utils';

@Injectable()
export class StorybookService {
  public data$ = this.component.data$;

  protected layout$ = this.breakpointService.breakpoint$.pipe(
    // tap((breakpoint) => console.log('breakpoint', breakpoint)),
    switchMap((breakpoint) =>
      this.component.data$.pipe(
        filter((data) => Boolean(data)),
        // tap((d) => console.log('layout', d)),
        map((data) => ({
          layoutType: data.layoutType,
          layoutBehaviorStyle:
            data.showAsSliderOnMobile &&
            [BREAKPOINT.sm, BREAKPOINT.xs].includes(breakpoint)
              ? 'SLIDER'
              : data.layoutBehaviorStyle,
          layoutOptionStyle: data.layoutOptionStyle,
          articleDisplayBlocks: data.articleDisplayBlocks,
        }))
      )
    ),
    distinctUntilChanged()
  );

  constructor(
    protected component: CmsComponentData<StorybookComponentModel>,
    protected cmsService: CmsService,
    protected breakpointService: BreakpointService
  ) {}

  getLayout() {
    return this.layout$;
  }

  getStoryBooks(): Observable<string[]> {
    return this.data$.pipe(map((data) => data?.contentIds?.map((id) => id)));
  }

  getStorybookItems(storybook): Observable<Observable<string>[]> {
    return this.cmsService
      .getComponentData(storybook)
      .pipe(map((content: any) => content.contentIds.map((id) => of(id))));
  }

  getContentItems(): Observable<Observable<string>[]> {
    return this.component.data$.pipe(
      // tap(console.log),
      filter((content) => Boolean(content)),
      map((content) => content.contentIds.map((id) => of(id)))
    );
  }

  getStories(id: string, layout): Observable<StoryData[]> {
    return this.cmsService.getComponentData(id).pipe(
      map((content: any) => {
        let chunkLength;

        if (layout?.layoutOptionStyle === 'ONE_HIGHLIGHT_TWO_DETAILS') {
          chunkLength = 3;
        }

        // console.log(id, layout);
        return chunkLength
          ? chunkArray(content.contentIds, chunkLength)
          : content.contentIds;
      })
    );
  }

  getContent(id: string) {
    return this.cmsService.getComponentData(id);
  }

  protected getType(content) {
    return !content.link?.type ||
      content.link.type === 'ALIAS' ||
      content.link.type === 'TEMPLATEID'
      ? content.source
      : content.link.type;
  }
}
