import{test,expect, chromium, Browser,Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel: 'chrome'});
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //await page.getByText('Register Account').textContent(); // gives both visible and hidden text in DOM

    //await page.getByText('Register Account').innerext(); //gives only the visible text so for testing purpose this is best

    await page.getByText('Register Account').innerHTML(); // gives you the inner html of the element
    
    await page.getByText('If you already have an account with us, please login at the').highlight();

})();