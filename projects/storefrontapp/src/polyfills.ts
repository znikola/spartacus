/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.

/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.

/** Evergreen browsers require these. **/
import 'core-js/es/reflect';
/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone'; // Included with Angular CLI.

/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.

// SPIKE DO IT ONLY FOR OUTLETS COMPONENTS:
const CX_LISTENERS = 'cxListeners';

const addEventListener = Element.prototype.addEventListener;
const removeEventListener = Element.prototype.removeEventListener;

Element.prototype.addEventListener = function(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions
) {
  if (!this[CX_LISTENERS]) {
    this[CX_LISTENERS] = {};
  }
  if (!this[CX_LISTENERS][type]) {
    this[CX_LISTENERS][type] = [];
  }
  this[CX_LISTENERS][type].push({ type, listener, options });

  return addEventListener.call(this, type, listener, options);
};

Element.prototype.removeEventListener = function(
  type: string,
  listener: EventListenerOrEventListenerObject,
  options: boolean | AddEventListenerOptions
) {
  if (this[CX_LISTENERS] && this[CX_LISTENERS][type]) {
    const array = this[CX_LISTENERS][type];
    for (let i = 0; i < array.length; i++) {
      const obj = array[i];
      if (obj.type === type && obj.listener && obj.options === options) {
        array.splice(i, 1);
        break;
      }
    }
  }

  return removeEventListener.call(this, type, listener, options);
};
