import {allureStep} from "../AllureStepWrapper/AllureStep.js";
const EC = protractor.ExpectedConditions;

export class Waiter{
    async waitElementIsClickable(elem, sec){
        await allureStep("Wait for element is clickable", async () => {
            return browser.wait(EC.elementToBeClickable(elem), sec * 1000, "Element should be clickable, but it's not.");
        });
    }
    async waitElementIsVisible(elem, sec){
        await allureStep("Wait for element is visible", async () => {
            return browser.wait(EC.visibilityOf(elem), sec * 1000, "Element should be visible, but it's not.");
        });
    }
    async waitElementIsEnabled(elem, sec){
        await allureStep("Wait for element is enabled", async () => {
            browser.wait(function(){
                return elem.isEnabled();
            }, sec * 1000, "Element should be enabled, but it's not.");
        });
    }
    async waitElementIsInvisible(elem, sec){
        await allureStep("Wait for element is invisible", async () => {
            return browser.wait(EC.invisibilityOf(elem), sec * 1000, "Element should be invisible, but it's not.");
        });
    }
    async waitForElementAttribute(elem, attributeName, sec){
        await allureStep("Wait for element attribute", async () => {
            browser.wait(function(){
                return elem.getAttribute(attributeName);
            }, sec * 1000, `Element should contain attribute "${attributeName}", but it doesn't.`);
        });
    }
    async waitForElementText(elem, sec){
        await allureStep("Wait for element text", async () => {
            browser.wait(function(){
                return elem.getText();
            }, sec * 1000, `Element should contain text, but it doesn't.`);
        });
    }
    async waitForElementTextChanged(elem, sec){
        await allureStep("Wait for element text changed", async () => {
            let textKeeper;
            elem.getText().then((text) => {textKeeper = text});
            browser.wait(function(){
                return elem.getText().then((text) => {return text != textKeeper});
            }, sec * 1000, `Text of element should have changed, but it didn't.`);
        });
    }
    async waitForElementAttributeChanged(elem, attributeName, sec){
        await allureStep("Wait for element attribute changed", async () => {
            let attributeKeeper;
            elem.getAttribute(attributeName).then((attr) => {attributeKeeper = attr});
            browser.wait(function(){
                return elem.getAttribute(attributeName).then((attr) => {return attr != attributeKeeper});
            }, sec * 1000, `Attribute "${attributeName}" of element should have changed, but it didn't.`);
        });
    }
    async waitForDOMReady(sec){
        await allureStep("Wait for DOM is ready", async () => {
            return browser.wait(function(){
                return browser.executeScript(`return window.document.readyState;`).then((state) => {return state === 'complete'});
            }, sec * 1000, 'DOM is not ready');
        });
    }
}