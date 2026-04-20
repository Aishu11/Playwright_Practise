import{test,expect, chromium, Browser, Locator} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    let links: Locator[] = await page.locator('a.list-group-item').all();

    for(let link of links){
        let text:string = await link.innerText();
        if(text === 'Register'){
            await link.click();
        }
    }

})();