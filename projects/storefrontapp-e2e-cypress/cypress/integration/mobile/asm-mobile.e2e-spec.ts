import * as asm from '../../helpers/asm';
import { formats } from '../../sample-data/viewports';

context(
  `ASM - Mobile ${formats.mobile.width + 1}p resolution`,
  {
    viewportHeight: formats.mobile.width,
    viewportWidth: formats.mobile.height,
  },
  () => {
    before(() => {
      cy.window().then((win) => win.sessionStorage.clear());
    });

    asm.asmTests(true);
  }
);
