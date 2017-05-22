import { ChriscarmelGithubIoPage } from './app.po';

describe('chriscarmel.github.io App', () => {
  let page: ChriscarmelGithubIoPage;

  beforeEach(() => {
    page = new ChriscarmelGithubIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Hello, world!');
  });
});
