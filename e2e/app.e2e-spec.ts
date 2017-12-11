import { NgweatherappPage } from './app.po';

describe('ngweatherapp App', () => {
  let page: NgweatherappPage;

  beforeEach(() => {
    page = new NgweatherappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
