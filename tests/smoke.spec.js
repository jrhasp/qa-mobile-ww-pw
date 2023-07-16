const { test, expect } = require('@playwright/test');
const { Home } = require('../pom/home.page');
const { Login } = require('../pom/login.page');
const { Services } = require('../pom/services.page');
const { Rate } = require('../pom/rate.page');

let home;
let login;
let services;
let rate;

test.describe('WatchWorthy' ,() => {

  test.beforeEach( async ({ page } ) => {
    home = new Home(page);
    login = new Login(page);
    services = new Services(page);
    rate = new Rate(page);
  });

  test.afterEach( async ({ page } ) => {
    await page.close()
  });

  test('should navigate to watchworthy.app and verify app loads', async () => {
    await home.goto();
    await expect(home.btnStart).toBeVisible();
  });

  test('should verify that signin page loads', async () => {
    await home.goto();
    await home.btnSignin.click();
    await expect(login.title).toBeVisible();
    await expect(login.title).toHaveText('Sign-In')
  });

  test('should verify all login methods are displayed', async () => {
    await home.goto();
    await home.btnSignin.click();
    await expect(login.title).toBeVisible();
    await expect(login.title).toHaveText('Sign-In');
    await expect(login.logoEmail).toBeVisible();
    await expect(login.logoFacebook).toBeVisible();
    await expect(login.logoGoogle).toBeVisible();
  });

  test('shuold verify all providers render', async () => {
    await home.goto();
    await expect(home.btnStart).toBeVisible();
    await home.btnStart.click();
    await expect(services.title).toBeVisible();
    await expect(services.listServices).toHaveCount(78);
  });

  test('should skip providers landing and verify rating page loads', async () => {
    await home.goto();
    await expect(home.btnStart).toBeVisible();
    await home.btnStart.click();
    await services.btnSkip.click();
    await expect(await rate.btnCloseGuide).toBeVisible();
    await rate.btnCloseGuide.click();
  });


});


