import{test,expect, chromium,Browser, Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //1. getByText
    await page.getByText('Register Account', {exact:true}).highlight(); // This we can use if we have the visible text and exact true will search for the exact text

    //2. locator + hasText
    await page.locator('a', {hasText: 'Privacy Policy'}) // This way we can say that we have a //a tag and it has the text 'Privacy Policy'

})();