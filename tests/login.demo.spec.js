import { test, expect, Locator } from '@playwright/test';
test('login', async ({ page }) =>{
    await page.goto("https://www.saucedemo.com/")

    const username = page.locator('#user-name');
    const password =page.locator('#password');
    const login =page.locator('#login-button');
 

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await login.click();
    await expect (page).toHaveURL('https://www.saucedemo.com/inventory.html');

});
    

