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
    return this.router.isActive(this.router.createUrlTree(routeParts), true);
  }
}
