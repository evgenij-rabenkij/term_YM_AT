import {MainPage} from "./PageObjects/MainPage.js";
import {LogInPage} from "./PageObjects/LogInPage.js";
import {PasswordInputPage} from "./PageObjects/PasswordInputPage.js";


describe('First test', function() {

    browser.ignoreSynchronization = true;
    browser.driver.manage().window().maximize();

    const mainPage = new MainPage();
    const logInPage = new LogInPage();
    const passwordInputPage = new PasswordInputPage();

    const url = "https://market.yandex.by/";
    const username = "igorrudoviy";
    const password = "zx5iopq2";

    beforeEach(async () => {
        await await browser.get(url);
    });

    it('Log In', async function() {
        await mainPage.goToLogInPage();
        await logInPage.inputLogin(username);
        await passwordInputPage.inputPassword(password);
        await mainPage.expandUserBar();
        expect(mainPage.userNameHandler.getText()).toEqual(username);
    });

    it('Log Out', async function() {
        await mainPage.expandUserBar();
        await mainPage.logOut();
        expect(await mainPage.logInButton.isPresent()).toEqual(true);
    });
});