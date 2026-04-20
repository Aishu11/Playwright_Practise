import{test,expect, chromium, Browser, Locator} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    // await page.goto('https://www.flipkart.com/');

    // //capture total links in the page.
    // let text:string[] = await page.locator('a[href]').allInnerTexts(); // a[href] -> give me the link that has href value-
    // console.log("count of all textlinks:" + text.length);
    // console.log("Text of all links" + text);
    

    //Will check for Images attribute using all -> To get alt value of image
    await page.goto("https://www.flipkart.com/");

    let imagelocators:Locator[] = await page.locator('//img[@alt]').all();
    console.log(imagelocators.length);

    for(let e of imagelocators){
            //console.log(await e.getAttribute('alt'));
            console.log(await e.getAttribute('src'));
    }
})();