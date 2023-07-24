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
    await home.verifyBtnStartIsVisible();
  });

  test('should verify that signin page loads', async () => {
    await home.goto();
    await home.clickBtnSignIn();
    await login.verifySignInPageLoads();
  });

  test('should verify all login methods are displayed', async () => {
    await home.goto();
    await home.clickBtnSignIn();
    await login.verifyLoginMethodsDisplay();
  });

  test('shuold verify all providers render', async () => {
    await home.goto();
    await home.clickBtnStart();
    await services.verifyServicesPageLoaded();
    await services.verifyAllServicesRender(78);
  });

  test('should skip providers landing and verify rating page loads', async () => {
    await home.goto();
    await home.clickBtnStart();
    await services.clickBtnSkip();
    await rate.closeGuide();
  });


});


