import { test, expect } from '../fixture/BaseTest';

// use fixtures to perform login before each test and logout after each test

// test.afterEach(async ({ userPage }) => {
//     await userPage.logout();
//     console.log('Logged out after test');
// });
test('Login Test', async ({ page, loginPage, commonUtils }) => {
    await loginPage.gotoLoginPage();
   console.log('Login successful with global setup, skipping login steps in this test');
   await page.waitForTimeout(2000);


}); 