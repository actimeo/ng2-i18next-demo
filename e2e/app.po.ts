export class Ng2I18nextDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-i18next-demo-app p')).getText();
  }
}
