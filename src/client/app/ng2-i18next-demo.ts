import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {I18nDirective, I18nService} from 'ng2-i18next/ng2-i18next';

@Component({
  selector: 'ng2-i18next-demo-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/ng2-i18next-demo.html',
  directives: [ROUTER_DIRECTIVES, I18nDirective],
  pipes: []
})
@RouteConfig([
])
export class Ng2I18nextDemoApp {
  defaultMeaning: number = 42;
  localizedText: string = "Press to load localized text";

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }

  constructor(private i18n: I18nService) { }

  onclick() {
    this.localizedText = this.i18n.t('hello-world');
  }

}
