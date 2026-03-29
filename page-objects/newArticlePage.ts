import { Page, test, expect } from '@playwright/test'
import { HelperBase } from './helperBase'

export class NewArticlePage extends HelperBase {

    constructor(page: Page) {
        super(page)

    }

    async createNewArticle(title: string, desc: string, body: string) {
        const newArticleLink = this.page.locator('.ion-compose')
        const articleTitle = this.page.getByPlaceholder('Article Title')
        const articleDesc = this.page.getByPlaceholder('What\'s this article about?')
        const articleBody = this.page.getByPlaceholder('Write your article (in markdown)')
        const publishArticleButton = this.page.getByRole('button', { name: 'Publish Article' })
        const createdArticleTitle = await this.page.locator('.container').locator('h1').filter({hasText: title})

        await newArticleLink.click()
        await articleTitle.fill(title)
        await articleDesc.fill(desc)
        await articleBody.fill(body)
        await publishArticleButton.click()
        await createdArticleTitle.waitFor({state: 'visible'})

        
    }
}