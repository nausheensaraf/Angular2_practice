import { TestSeedPage } from './app.po';

describe('test-seed App', function() {
  let page: TestSeedPage;

  beforeEach(() => {
    page = new TestSeedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
