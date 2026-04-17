import{chromium, Browser, Page} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();

    await page.goto('https://www.freshworks.com/');

    let heading:String = await page.getByRole('heading' , {name:'Enterprise grade'}).innerText();
    console.log(heading);

    //For Span, div and P -> getByRole don't work
    // let headingtwo:String= await page.getByRole('heading', {name:'Freshworks provides AI-first IT and customer service software to deliver exceptional employee and customer experiences'}).innerText();
    // console.log(headingtwo);

    //We have use getByText in that case. -> if the text is visible.
    let headingtwo:string = await page.getByText('Freshworks provides').innerText();
    console.log(headingtwo);

})();