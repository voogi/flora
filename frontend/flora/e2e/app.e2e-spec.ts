import { FloraPage } from './app.po';

describe('flora App', () => {
  let page: FloraPage;

  beforeEach(() => {
    page = new FloraPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('flora works!');
  });
});
