import {Waiter} from "../Helper/Waiter.js";
const waiter = new Waiter();

export class MainPage{
    constructor(){
        this.logInButton = element(by.css("div.header2-nav__user"));
        this.userIcon = element(by.css("div.header2-nav__user>a"));
        this.userNameHandler = element(by.css("div.header2-nav__user>a"));
        this.logOutButton = element(by.css("li.header2-user-menu__item>a.user__logout"));
    }
    async goToLogInPage(){
        await waiter.waitElementIsClickable(this.logInButton, 3);
        await this.logInButton.click();
        const handles = await browser.getAllWindowHandles();
        if(handles.length !== 1){
            await browser.switchTo().window(handles[1]);
        }
    }
    async expandUserBar(){
        await waiter.waitElementIsClickable(this.userIcon, 5);
        await this.userIcon.click();
    }
    async logOut(){
        await waiter.waitElementIsClickable(this.logOutButton, 5);
        await this.logOutButton.click();
    }
}