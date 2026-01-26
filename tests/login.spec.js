import { test, expect } from '../fixture/BaseTest';

test('Login Test', async ({ page, loginPage, commonUtils }) => {
    await loginPage.gotoLoginPage();
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;
    if (!username || !password) {
        throw new Error('Missing APP_USERNAME or APP_PASSWORD. Set them via cross-env or in your .env file before running tests.');
    }
    const decryptedUsername = commonUtils.decryptData(username);
    const decryptedPassword = commonUtils.decryptData(password);
    console.log('Decrypted Username:', decryptedUsername);
    console.log('Decrypted Password:', decryptedPassword);
    await loginPage.loginORangeHRM(decryptedUsername, decryptedPassword);
    await expect(loginPage.dashboardHeading).toBeVisible({ timeout: 5000 });
    console.log('Login Test Passed');


}); 