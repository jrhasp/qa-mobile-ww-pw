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

  async verifyServicesPageLoaded() {
    await expect(this.btnSkip).toBeVisible();
  }
  // Today this method verifies the count, probably in the future we can check against a list to verify that each of the providers are there
  async verifyAllServicesRender(amount) {
    await expect(this.listServices).toHaveCount(amount);
  }

  async clickBtnSkip() {
    await expect(this.btnSkip).toBeVisible();
    await this.btnSkip.click();
  }

};


