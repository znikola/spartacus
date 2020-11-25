import { Injectable } from '@angular/core';
import { SemanticPathService } from '@spartacus/core';
import { Router } from '@angular/router';
import { UrlCommands } from '../../../../../projects/core/src/routing/configurable-routes/url-translation';

@Injectable({
  providedIn: 'root',
})
export class EntityPathService {
  constructor(
    private semanticPath: SemanticPathService,
    private router: Router
  ) {}

  isActive(commands: UrlCommands): boolean {
    const routeParts = this.semanticPath.transform(commands);
    if (routeParts[0] === '/') {
      routeParts.shift();
    }
    const routeSegments = this.router.createUrlTree(routeParts).root.children
      .primary.segments;
    const currentUrlSegments = this.router.createUrlTree(
      this.router.url.split('/')
    ).root.children.primary.segments;

    return routeSegments.every((s) => {
      return currentUrlSegments.find(({ path }) => s.path === path);
    });
  }
}
