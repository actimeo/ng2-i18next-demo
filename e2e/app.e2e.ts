import { Ng2I18nextDemoPage } from './app.po';

describe('ng2-i18next-demo App', function() {
  let page: Ng2I18nextDemoPage;

  beforeEach(() => {
    page = new Ng2I18nextDemoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-i18next-demo Works!');
  });
});
