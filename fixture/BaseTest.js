import { test as baseTest } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import CommonUtils from '../utils/CommonUtils';

export const test = baseTest.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  commonUtils: async ({ }, use) => {
    const commonUtils = new CommonUtils();
    await use(commonUtils);
  },
});

export { expect } from '@playwright/test';