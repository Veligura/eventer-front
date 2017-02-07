import { EventerFrontPage } from './app.po';

describe('eventer-front App', function() {
  let page: EventerFrontPage;

  beforeEach(() => {
    page = new EventerFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
