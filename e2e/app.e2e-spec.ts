import { MyportalAngularAppPage } from './app.po';

describe('myportal-angular-app App', () => {
  let page: MyportalAngularAppPage;

  beforeEach(() => {
    page = new MyportalAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
