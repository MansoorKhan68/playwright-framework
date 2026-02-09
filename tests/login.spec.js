import { test, expect } from '../fixture/BaseTest';

test('Login Test', async ({ page, loginPage, commonUtils }) => {
    await loginPage.gotoLoginPage();
   console.log('Login successful with global setup, skipping login steps in this test');
   await page.waitForTimeout(2000);


}); 