import{test,expect, chromium, Browser, Locator} from '@playwright/test';

//Using only all method how to capture the inner text and its attributes
(async() => {
    let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let locatorslink:Locator[] = await page.locator('a.list-group-item').all();

    let individuallink:string[] = [];
    for(let e of locatorslink){
       let text:string=  await e.innerText();
       individuallink.push(text);

    }
    console.log(individuallink.length);
    console.log(individuallink);
    await browser.close();
})();