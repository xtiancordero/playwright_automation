import { FullConfig } from '@playwright/test'

async function globalTeardown(config: FullConfig) {
    const buildStatus = process.env.TEST_RESULT === 'failed' ? 'failed' : 'passed'
    
    console.log(`BrowserStack build completed with status: ${buildStatus}`)
    
}

export default globalTeardown