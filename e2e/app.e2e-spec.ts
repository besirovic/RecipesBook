import { RecepiesbookPage } from './app.po';

describe('recepiesbook App', () => {
  let page: RecepiesbookPage;

  beforeEach(() => {
    page = new RecepiesbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
