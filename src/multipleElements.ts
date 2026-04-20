import{test,expect, chromium, Browser} from '@playwright/test';

(async() => {
    let browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    let page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    
    let textitems: string[] = await page.locator('a.list-group-item').allInnerTexts();
    console.log(`"Length of those is:" ${textitems.length}`);
    console.log(textitems);

    // for(let item of textitems){
    //     //console.log(item);
    //     if(item === 'Register'){
    //         await page.getByText(item).first().click();
    //         break;
    //     }
    // }

    for(let i = 0; i<textitems.length;i++){
        console.log(textitems[i]);
        if(textitems[i]== 'Register'){
            await page.getByText(textitems[i]).first().click();
            break;
        }
    }
    await browser.close(); 
})();


//Step 1: allInnerTexts()  →  harvest all texts into a string array
//Step 2: getByText(item)  →  trade the text back for a locator to act on it
