import { Page, test } from '@playwright/test'


export class HomaPage {

    private readonly page: Page
    
    constructor(page: Page) {
        this.page = page
    }

    async goToHomePage() {
        const homePageButton = this.page.getByRole('link', {name: 'Home'})
        await homePageButton.click()
    }

    async getFirstArticleTitle() {
        const firstArticle = this.page.locator('.preview-link').locator('h1')
        const firstArticleTitle = await firstArticle.first().textContent()

        return firstArticleTitle
    }

    async deleteArticle(articleTitle: any) {
        const articleTitleToDelete = this.page.locator('.preview-link').locator('h1').filter({hasText: articleTitle})
        const deleteButton = this.page.locator('span button:has-text("Delete Article")').first()

        await articleTitleToDelete.click()
        await deleteButton.click()
        await this.page.waitForURL('https://conduit.bondaracademy.com/')
    }
}