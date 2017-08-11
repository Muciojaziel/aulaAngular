import { AppExemploPage } from './app.po';

describe('app-exemplo App', () => {
  let page: AppExemploPage;

  beforeEach(() => {
    page = new AppExemploPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
