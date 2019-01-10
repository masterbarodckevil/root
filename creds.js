module.exports = {
    const USERNAME_SELECTOR = '#user\[login\]';
    const PASSWORD_SELECTOR = '#user\[password\]';
    const BUTTON_SELECTOR = 'button.btn-mktg:nth-child(10)';
}
await page.click(USERNAME_SELECTOR);
await page.keyboard.type(CREDS.username);

await page.click(PASSWORD_SELECTOR);
await page.keyboard.type(CREDS.password);

await page.click(BUTTON_SELECTOR);

await page.waitForNavigation();
