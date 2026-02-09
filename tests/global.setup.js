import {test, expect} from '../fixture/BaseTest';

test('Login global setup', async ({ loginPage, commonUtils, page }) => {
    const username = commonUtils.decryptData(process.env.APP_USERNAME);
    const password = commonUtils.decryptData(process.env.APP_PASSWORD);
    await loginPage.gotoLoginPage();
    await loginPage.loginORangeHRM(username, password);
    await page.waitForURL(`${process.env.BASE_URL}/web/index.php/dashboard/index`);
    await expect(loginPage.dashboardHeading).toHaveText(/Dashboard/i);
    console.log('Global setup login successful');

    await page.context().storageState({ path: './playwright/.auth/auth.json' });
});


