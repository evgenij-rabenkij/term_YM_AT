import {allureStep} from "../AllureStepWrapper/AllureStep.js";

export class Actions{
    async hoverOnElement(element){
        await allureStep("Hover on element", async () => {
            await browser.actions().mouseMove(element).perform();
        });
    }
    async hoverByCoordinates(coordinates){
        await allureStep("Hover by coordinates", async () => {
            await browser.actions().mouseMove(coordinates).perform();
        });
    }
    async clickOnElement(elem){
        await allureStep("Click on element", async () => {
            await browser.actions().mouseMove(elem).click().perform();
        });  
    }
    async doubleClickOnElement(elem){
        await allureStep("Double click on element", async () => {
            await browser.actions().mouseMove(elem).doubleClick().perform();
        }); 
    }
    async pressEnter(element){
        await allureStep("Press Enter", async () => {
            await element.sendKeys(protractor.Key.ENTER);
        }); 
    }
    async pressTab(element){
        await allureStep("Press TAB", async () => {
            await element.sendKeys(protractor.Key.TAB);
        });
    }
    async pressCtrlC(element){
        await allureStep("Press Cntrl+C", async () => {
            await element.sendKeys(protractor.Key.CONTROL, "a", protractor.Key.NULL);
            await element.sendKeys(protractor.Key.CONTROL, "c", protractor.Key.NULL);
        });
    }
    async pressCtrlV(element){
        await allureStep("Press Cntrl+V", async () => {
            await element.sendKeys(protractor.Key.CONTROL, "v", protractor.Key.NULL);
        });
    }
    async dragAndDrop(dragElement, dropElement){
        await allureStep("Drag and drop", async () => {
            await browser.actions().dragAndDrop(dragElement, dropElement).perform();
        });
    }
}