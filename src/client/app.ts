import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {Ng2I18nextDemoApp} from './app/ng2-i18next-demo';
import {I18nService, I18nServiceConfig} from 'ng2-i18next/ng2-i18next';

declare var i18nextBrowserLanguageDetector: any;
declare var i18nextXHRBackend: any;

bootstrap(Ng2I18nextDemoApp, [
  provide(I18nServiceConfig, {
    useValue: {
      use: [i18nextBrowserLanguageDetector, i18nextXHRBackend],
      config: {
        detection: { order: ['navigator'] },
        fallbackLng: 'en'
      }
    }
  }),
  I18nService
]);
