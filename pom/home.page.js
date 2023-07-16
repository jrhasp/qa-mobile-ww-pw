const { expect } = require('@playwright/test');

exports.Home = class Home {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnStart = this.page.locator('.button-cta-get-ww');
    this.btnSignin = this.page.locator('header .button-sign-in')
  }

  async goto() {
    await this.page.goto('https://watchworthy.app')
  }
  
};