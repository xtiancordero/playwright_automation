import { Page, test } from '@playwright/test'

export class SignInPage {

    private readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async userSignIn(email: string, password: string) {
        const signInLink = this.page.getByRole('link', {name: 'Sign in'})
        const emailField = this.page.getByPlaceholder('Email')
        const passwordField = this.page.getByPlaceholder('Password')
        const signInButton = this.page.getByRole('button', {name: 'Sign in'})

        await signInLink.click()
        await emailField.fill(email)
        await passwordField.fill(password)
        await signInButton.click()

    }
}