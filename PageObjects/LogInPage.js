import {Waiter} from "../Helper/Waiter.js";
const waiter = new Waiter();

export class LogInPage{
    constructor(){
        this.loginInputField = element(by.css("input#passp-field-login"));
    }
    async inputLogin(login){
        await waiter.waitElementIsVisible(this.loginInputField, 5);
        await this.loginInputField.sendKeys(login + protractor.Key.ENTER);
    }
}