import {Waiter} from "../Helper/Waiter.js";
const waiter = new Waiter();

export class PasswordInputPage{
    constructor(){
        this.passwordInputField = element(by.css("input#passp-field-passwd"));
    }
    async inputPassword(password){
        await waiter.waitElementIsVisible(this.passwordInputField, 5);
        await this.passwordInputField.sendKeys(password + protractor.Key.ENTER);
        const handles = await browser.getAllWindowHandles();
        await browser.switchTo().window(handles[0]);
    }
}