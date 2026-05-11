import { browser, expect } from '@wdio/globals'
import {MainPage} from '../pageobjects/mainPage.js'
import fs from 'fs';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        let mainPage = new MainPage();
        await mainPage.allowButton.waitForDisplayed();
        await mainPage.allowButton.click();
        await mainPage.allowAccessCheckBox.waitForDisplayed();
        await mainPage.allowAccessCheckBox.click();

        await mainPage.consentButton.waitForDisplayed({ timeout: 5000 });
        await mainPage.consentButton.click();

        await mainPage.addButtonDoc.waitForDisplayed();
        await mainPage.addButtonDoc.click();

        await expect(mainPage.imageToPdfButton).toBeDisplayed();
        console.log(process.env.PLATFORM)
    })
})

