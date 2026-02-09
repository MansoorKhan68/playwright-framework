import { test, expect } from '@playwright/test';
class UserPage {
    constructor(page) {
        this.page = page; 
        this.usermenuButton = page.locator('.oxd-userdropdown-tab');
        this.logougtButton = page.getByRole('menuitem', { name: 'Logout' });

    }
    async logout() {
        await this.usermenuButton.click();
        await this.logougtButton.click();
    }
}
export default UserPage;