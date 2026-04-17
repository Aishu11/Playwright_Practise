import{test,expect, chromium, Browser, Page, Locator} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page:Page = await browser.newPage();
    
     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    //find the element + action
     // await page.locator('#input-email').fill('aishuk6@gmail.com');
    // await page.locator('#input-password').fill('Test@1234');
    // await page.locator(`input[value='Login']`).click();

    let emailId: Locator = page.locator('#input-email');
    let password:Locator = page.locator('#input-password');
    let login:Locator = page.locator(`input[value='Login']`);

    await emailId.fill('aishuk6@gmail.com');
    await password.fill('Test@1234');
    await login.click();    

    let headervalue:String | null = await page.getByText('My Account').textContent();
    console.log("HeaderValue Is:" + headervalue);

    

})();