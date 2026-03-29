import { Page } from '@playwright/test'
import { SignInPage } from './signInPage'
import { HomaPage } from './homePage'
import { NewArticlePage }   from './newArticlePage'


export class PageManager {

    private readonly page: Page
    private readonly signInPage: SignInPage
    private readonly homePage: HomaPage
    private readonly newArticlePage: NewArticlePage

    constructor(page: Page) {
        this.page = page
        this.signInPage = new SignInPage(this.page)
        this.homePage = new HomaPage(this.page)
        this.newArticlePage = new NewArticlePage(this.page)

    }

    navigateToSignInPage() {
        return this.signInPage
    }

    navigateToHomePage() {
        return this.homePage
    }

    navigateToNewArticlePage() {
        return this.newArticlePage
    }
}