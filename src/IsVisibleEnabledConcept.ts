import{test,expect, chromium,Browser, Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://api.cogmento.com/register/?lang=en-GB');

    let submitbtn = page.locator('#sign-in-btn');
    let visible:boolean = await submitbtn.isVisible();
    console.log("Is visible:" + visible);

    let enabled:boolean = await submitbtn.isEnabled();
    console.log("IsEnabled:" + enabled);

   //we have isDisabled() method as well.

    //Avoid clicking on the disabled element - Playwright will throw you an error.
    
    //Playwright will check if the element is visible, enabled and then if it is stable to click.

})();