import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2I18nextDemoApp} from '../app/ng2-i18next-demo';

beforeEachProviders(() => [Ng2I18nextDemoApp]);

describe('App: Ng2I18nextDemo', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2I18nextDemoApp], (app: Ng2I18nextDemoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2I18nextDemoApp], (app: Ng2I18nextDemoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

