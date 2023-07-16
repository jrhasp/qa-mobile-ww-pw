const { expect } = require('@playwright/test');

exports.Rate = class Rate {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnCloseGuide = this.page.locator('div[role="button"][class*="guide__close-button"]')
  }

};