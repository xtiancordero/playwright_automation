import { test, expect } from '../fixtures/test-fixture'
import { faker } from '@faker-js/faker'

test.beforeEach(async({page}) => {
    await page.goto('/')
})

test('create new article', async({pageManager, page}) => {
    const title = faker.lorem.word()
    const desc = faker.lorem.words()
    const body = faker.lorem.words()
    const firstArticleTitle = await pageManager.navigateToHomePage().getFirstArticleTitle()

    await pageManager.navigateToSignInPage().userSignIn(process.env.USER_EMAIL, process.env.USER_PASSWORD)
    await pageManager.navigateToNewArticlePage().createNewArticle(title, desc, body)
    await pageManager.navigateToHomePage().goToHomePage()
    await pageManager.navigateToNewArticlePage().validateTextsAreEqual(title, firstArticleTitle)
    await pageManager.navigateToHomePage().deleteArticle(firstArticleTitle)
    await page.close()

})