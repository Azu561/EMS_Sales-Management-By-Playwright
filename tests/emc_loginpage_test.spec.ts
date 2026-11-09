import {test,} from '@playwright/test'
import { LoginPage } from './EMS/LoginPage'


test('login', async ({ page }) =>{
    const loginPage=new LoginPage(page);
   await    loginPage.gotoLoginPage();
   await    loginPage.login('sample@emc.com','Test@2018');
   await    loginPage.verifyLoginSuccess();
});
