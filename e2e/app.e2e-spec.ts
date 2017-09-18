import { OrdamedRussiaPage } from './app.po';

describe('ordamed-russia App', () => {
  let page: OrdamedRussiaPage;

  beforeEach(() => {
    page = new OrdamedRussiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
