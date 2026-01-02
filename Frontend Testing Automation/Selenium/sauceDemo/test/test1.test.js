const { Builder } = require('selenium-webdriver');

async function openWebsite() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://www.saucedemo.com');
}
openWebsite();