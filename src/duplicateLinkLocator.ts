import { test, expect, chromium, Browser, Page } from '@playwright/test';

(async () => {
    let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await page.getByRole('link', { name: 'Forgotten Password' }).first().click(); //When there are duplicate elements then we can make use of first and last method

})();