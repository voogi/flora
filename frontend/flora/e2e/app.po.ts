import { browser, element, by } from 'protractor';

export class FloraPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('flora-root h1')).getText();
  }
}
