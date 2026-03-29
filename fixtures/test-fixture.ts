import { test as base, expect} from '@playwright/test'
import { PageManager } from '../page-objects/pageManager'

export type TestFixtures = {
    pageManager:  PageManager
}

export const test = base.extend<TestFixtures>({
    pageManager: async({page}, use) => {
        const pm = new PageManager(page)
        await use(pm)
    }
})

export { expect } 