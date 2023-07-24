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

  async verifyBtnStartIsVisible() {
   await expect(this.btnStart).toBeVisible();
  }

  async clickBtnSignIn() {
    await expect(this.btnSignin).toBeVisible();
    await this.btnSignin.click();
  }

  async clickBtnStart() {
    await this.verifyBtnStartIsVisible();
    await this.btnStart.click();
  }

  
};

