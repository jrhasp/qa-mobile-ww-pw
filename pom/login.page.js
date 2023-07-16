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

};

