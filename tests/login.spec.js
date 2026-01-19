import { test, expect } from '../fixture/base-test';

test('Login Test', async ({ page, loginPage }) => {
    await loginPage.gotoLoginPage();
        const username = process.env.APP_USERNAME;
        const password = process.env.APP_PASSWORD;
        if (!username || !password) {
            throw new Error('Missing APP_USERNAME or APP_PASSWORD. Set them via cross-env or in your .env file before running tests.');
        }
        await loginPage.loginORangeHRM(username, password);
    await expect(loginPage.dashboardHeading).toBeVisible({timeout:5000});
})