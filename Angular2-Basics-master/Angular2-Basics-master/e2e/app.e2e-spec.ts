import { Angular2BasicsPage } from './app.po';

describe('angular2-basics App', function() {
  let page: Angular2BasicsPage;

  beforeEach(() => {
    page = new Angular2BasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
