/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type authenticatedPage = typeof import('./pages/authenticated-page.js');
type homePage = typeof import('./pages/home-page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, authenticatedPage: authenticatedPage, homePage: homePage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
