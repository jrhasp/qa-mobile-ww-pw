const { expect } = require('@playwright/test');

exports.Login = class Login {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.title = this.page.locator('.page-header');
    this.logoEmail = this.page.locator('.login-email-logo');
    this.logoFacebook = this.page.locator('.login-facebook-logo');
    this.logoGoogle = this.page.locator('.login-facebook-logo');
  }

  async verifySignInPageLoads() {
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Sign-In')
  }

  async verifyLoginMethodsDisplay() {
    await expect(this.title).toBeVisible();
    await expect(this.title).toHaveText('Sign-In');
    await expect(this.logoEmail).toBeVisible();
    await expect(this.logoFacebook).toBeVisible();
    await expect(this.logoGoogle).toBeVisible();
  }


};

