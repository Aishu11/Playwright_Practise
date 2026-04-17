import{test,expect,Browser, chromium, Page, Locator, webkit} from "@playwright/test";

(async () => {
    let browser:Browser = await chromium.launch({
        headless:false, 
        //channel:'chrome',
        executablePath: 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe'
    });
    let page:Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let title:String = await page.title();
    let url:String = page.url();
    console.log("Page Title is:" + title);
    console.log("Page URL is:" + url);

    let emailID:Locator= page.locator("#input-email")
    await emailID.fill("aishu@gmail.com");
    //await page.close();
})();
