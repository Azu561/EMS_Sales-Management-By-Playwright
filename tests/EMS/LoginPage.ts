import {Page,   Locator} from '@playwright/test'
export class LoginPage{
    readonly page: Page;
    readonly home: Locator;
    readonly username:Locator;
    readonly pass:Locator;
    readonly loginbutton:Locator;


    constructor(page: Page){

        this.page=page;
        this.home=page.locator('//*[@id="app"]/main/div/nav/div/div[2]/a');
        this.username=page.locator('//*[@id="app"]/main/main/div[2]/div/div/form/div[2]/div[1]/input');
        this.pass=page.locator('//*[@id="app"]/main/main/div[2]/div/div/form/div[2]/div[2]/div/input');
        this.loginbutton=page.locator('//*[@id="app"]/main/main/div[2]/div/div/form/button');
    }
   async gotoLoginPage(){
     await this.page.goto('http://172.20.137.126:3000/');
   }
   async login(user: string, pass:string){
    await this.home.click();
    await this.username.fill(user);
    await this.pass.fill(pass);
    await this.loginbutton.click();
   }
   async verifyLoginSuccess(){
     await this.page.waitForURL('');
   }
}
    
