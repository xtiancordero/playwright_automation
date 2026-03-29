import { Page, test, expect } from '@playwright/test'

export class HelperBase {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async validateTextsAreEqual(expectedText: any, actualText: any) {
        expect(expectedText).toEqual(actualText)

    }
}