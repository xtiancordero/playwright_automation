import { chromium } from '@playwright/test'

async function globalSetup() {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.context().storageState({ path: 'auth.json' })
    await browser.close()
}

export default globalSetup

