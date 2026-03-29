import { test, expect } from '../fixtures/test-fixture'
import { PageManager } from '../page-objects/pageManager'
import { faker } from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto('https://conduit.bondaracademy.com/')
})

test('create new article', async({pageManager, page}) => {
    const title = faker.lorem.word()
    const desc = faker.lorem.words()
    const body = faker.lorem.words()

    await pageManager.navigateToSignInPage().userSignIn('xtian@test.com', 'xtianc9891')

    await pageManager.navigateToNewArticlePage().createNewArticle(title, desc, body)

    await pageManager.navigateToHomePage().goToHomePage()

    const firstArticleTitle = await pageManager.navigateToHomePage().getFirstArticleTitle()
    
    await pageManager.navigateToNewArticlePage().validateTextsAreEqual(firstArticleTitle, title)
    
    await pageManager.navigateToHomePage().deleteArticle(firstArticleTitle)

    await page.close()

})