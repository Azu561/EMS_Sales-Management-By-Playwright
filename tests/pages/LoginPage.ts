import { Page,Locator,expect } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton:Locator;
  

    constructor(page:Page){
        this.page=page;
        this.username=page.locator('#user-name');
        this.password= page.locator('#password');
        this.loginButton=page.locator('#login-button');
   

    }
    async gotoLoginPage(){
     await this.page.goto('https://www.saucedemo.com/');
    }
    async login( u:string,p:string){
        await this.username.fill(u);
        await this.password.fill(p);
        await this.loginButton.click();
    }
    async verifyLoginSuccess(){
       // await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html'); 
    }
}