import{test,expect, chromium, Browser, Locator} from '@playwright/test';

//Using only all method how to capture the inner text and its attributes
(async() => {
   let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    //await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // //Use case 1:
    // //Go to footerlinks and filter by say click 'Privacy Policy' alone
    // let alllinks:Locator = await page.locator('a.list-group-item');
    // await alllinks.filter({hasText: 'Register', visible:true}).click();

    // await page.waitForTimeout(2000);
    // browser.close();

    //Use case 2:
    // let footerlinks:Locator = await page.locator('footer a');
    // console.log("Count is" + await footerlinks.count());
    // await footerlinks.filter({hasText: 'Terms & Conditions', visible:true}).click();
    // await page.waitForTimeout(2000);
    // browser.close();


    // //Use case 3:
    // //search scenarios
    // await page.goto('https:google.com');
    // await page.getByTitle('Search').fill('Selenium testing');
    // let link:Locator= await page.locator(`//div[@role='presentation']//li`);
    // await link.filter({hasText:'website'}).click();
    // await page.waitForTimeout(2000);

    // //Usecase 4:
    // // //search scenarios
    // await page.goto('https:flipkart.com/');
    // await page.getByRole('textbox', { name: 'Search for Products, Brands' }).fill('macbook');
    // await page.waitForTimeout(2000);
    // await page.locator(`a.NXodMU`).filter({hasText:'air m3'}).click();
    // await page.waitForTimeout(2000);
    
    //Usecase 5:
    // //search scenarios
    await page.goto('https://www.amazon.in/');
    await page.locator('#twotabsearchtextbox').fill('macbook');
    await page.locator(`div[role='rowgroup'] div[role='button']`).filter({hasText:'m1'}).click();
    await page.waitForTimeout(2000);
})();