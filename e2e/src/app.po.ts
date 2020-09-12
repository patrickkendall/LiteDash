import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTagType(): Promise<string> {
    return element(by.id('welcome')).getTagName() as Promise<string>;
  }
}
