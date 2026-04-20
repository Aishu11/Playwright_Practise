import{test,expect, chromium, Browser,Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('c');

    await page.getByRole('link' , {name:'Continue'}).highlight();

    await page.getByRole('button', {name: 'Login'}).click();

    //input or button tag  -> role - button
    //a tag -> role -> link
})();