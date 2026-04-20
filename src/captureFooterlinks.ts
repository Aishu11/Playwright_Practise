import{test,expect, chromium, Browser, Locator} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let footerlinks:Locator[] = await page.locator('footer a').all(); //All locators in the array 
    // It is just like find elements method in Selenium
    console.log("count of Links:" + footerlinks.length);
    
    for(let e of footerlinks){
        let text:string |null= await e.innerText();// Always use inner text method 
        console.log(`Text is: ${text}`)
        // if(text === 'About Us'){
        //     await e.click();
        // }
        let hrefvalue: string|null = await e.getAttribute('href');
        console.log(`href value is: ${hrefvalue}`)
    }
    browser.close();
})();