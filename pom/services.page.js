const { expect } = require('@playwright/test');

exports.Services = class Services {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = this.page.locator('h1.header', { hasText: 'Services' });
    this.listServices = this.page.locator('div.item');
    this.btnSkip = this.page.locator('div[role="button"][class="next-button"]', { hasText: 'Skip' });
  }

};


