# Playwright Automation Framework

End-to-end test automation for the [Conduit](https://conduit.bondaracademy.com/) blogging platform using Playwright and TypeScript.

## Stack

- **[Playwright](https://playwright.dev/)** — browser automation and test runner
- **[TypeScript](https://www.typescriptlang.org/)** — type-safe test code
- **[@faker-js/faker](https://fakerjs.dev/)** — dynamic test data generation
- **[BrowserStack](https://www.browserstack.com/)** — cross-browser/device cloud testing

## Project Structure

```
├── fixtures/
│   └── test-fixture.ts       # Custom Playwright fixtures
├── page-objects/
│   ├── helperBase.ts          # Base class with shared utilities
│   ├── pageManager.ts         # Central access point for page objects
│   ├── signInPage.ts          # Authentication flows
│   ├── homePage.ts            # Homepage interactions
│   └── newArticlePage.ts      # Article creation
├── tests/
│   ├── uiTest.spec.ts         # Test specs
│   └── global-teardown.ts     # Post-run cleanup
├── playwright.config.ts
└── browserstack.yml
```

## Getting Started

```bash
npm install
npx playwright install
```

**Run tests locally:**
```bash
npm run execute-in-local
```

**Run tests on BrowserStack:**
```bash
npm run execute-in-browserstack
```

**View HTML report:**
```bash
npx playwright show-report
```

## Architecture

The framework follows the **Page Object Model (POM)** pattern:

- Each page has its own class encapsulating its locators and actions
- `PageManager` coordinates access to all page objects
- A custom fixture injects `PageManager` into tests automatically, keeping specs clean

## CI/CD

GitHub Actions runs the full test suite on every push and pull request to `main`/`master`. HTML reports are uploaded as artifacts and retained for 30 days.

## BrowserStack Coverage

| Platform | Browser |
|---|---|
| Windows 11 | Chrome (latest) |
| iPhone 16 | Safari |
| Samsung Galaxy S22 Ultra | Chrome |
