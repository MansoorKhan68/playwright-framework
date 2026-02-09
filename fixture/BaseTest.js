import { test as baseTest } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CommonUtils from '../utils/CommonUtils';
import UserPage from '../pages/UserPage';

export const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  commonUtils: async ({ }, use) => {
    const commonUtils = new CommonUtils();
    await use(commonUtils);
  },
  userPage: async ({ page }, use) => {
    const userPage = new UserPage(page);
    await use(userPage);
  }
});

export { expect } from '@playwright/test';