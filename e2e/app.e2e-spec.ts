import { TestSeedPage } from './app.po';

describe('test-seed App', () => {
  let page: TestSeedPage;

  beforeEach(() => {
    page = new TestSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
