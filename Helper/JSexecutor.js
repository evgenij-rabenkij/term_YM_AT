import {allureStep} from "../AllureStepWrapper/AllureStep.js";

export class JSexecutor{
    constructor(){
        this.tabIndex = 0;
    }
    async clickOnElement(element){
        await allureStep("Click on element", async () => {
            await browser.executeScript("arguments[0].click();", element);
        });
    }
    async clickOnElementByNumber(elements, number){
        await allureStep("Click on element by number", async () => {
            await browser.executeScript(`arguments[0].click();`, elements.get(number));
        });
    }
    async scrollToElement(element){
        await allureStep("Scroll to element", async () => {
            await browser.executeScript("arguments[0].scrollIntoView();", element);
        });
    }
    async scrollDown(){
        await allureStep("Scroll down", async () => {
            await browser.executeScript("window.scrollTo( 0, document.body.scrollHeight);");
        }); 
    }
    async scrollUp(){
        await allureStep("Scroll up", async () => {
            await browser.executeScript("window.scrollTo(0, -document.body.scrollHeight);");
        }); 
    }
    async getElementAttribute(element, attributeName){
        return await allureStep("Get element attribute", async () => {
            return browser.executeScript(`return arguments[0].getAttribute('${attributeName}');`, element);
        }); 
    }
    async setElementAttribute(element, attributeName, value){
        await allureStep("Set element attribute", async () => {
            browser.executeScript(`arguments[0].setAttribute("${attributeName}", "${value}");`, element);
        });
    }
    async openNewTab(){
        await allureStep("Open new tab", async () => {
            browser.executeScript("window.open();");
            const handles = await browser.getAllWindowHandles();
            browser.switchTo().window(handles[++this.tabIndex]);
        });  
    }
    async getTabTitle(){
        return await allureStep("Get tab title", async () => {
            return browser.executeScript("return window.document.title");
        });   
    }
    async getElementText(elem){
        return await allureStep("Get element text", async () => {
            return browser.executeScript("return arguments[0].innerText", elem);
        }); 
    }
    async getElementColor(elem){
        return await allureStep("Get element color", async () => {
            return browser.executeScript("return window.getComputedStyle(arguments[0]).getPropertyValue('color');", elem);
        }); 
    }
    async getElementHeight(elem){
        return await allureStep("Get element height", async () => {
            return browser.executeScript("return arguments[0].offsetHeight;", elem);
        });
    }
    async getElementWidth(elem){
        return await allureStep("Get element width", async () => {
            return browser.executeScript("return arguments[0].offsetWidth;", elem);
        });
    }
}