import { expect } from '@playwright/test';
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' }); 
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard' });
  }
  async gotoLoginPage() {
    const baseUrl = (process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com').replace(/\/$/, '');
    await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  }
  async loginORangeHRM(username, password) {
    if (!username || !password) {
      throw new Error('loginORangeHRM requires username and password. Provide credentials or set APP_USERNAME/APP_PASSWORD in your environment.');
    }
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
export default LoginPage;