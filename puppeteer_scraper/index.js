const puppeteer = require("puppeteer");

async function loginOnlyFans(email, password) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto("https://onlyfans.com", { waitUntil: "networkidle2" });
        await page.waitForSelector('input[name="email"]', { timeout: 15000 });

        await page.type('input[name="email"]', email);
        await page.type('input[name="password"]', password);
        await page.click('button[type="submit"]');

        await page.waitForNavigation({ waitUntil: "networkidle2", timeout: 20000 });

        const title = await page.title();
        const url = page.url();
        const content = await page.content();

        console.log("Login successful. Title:", title, "URL:", url);
    } catch (error) {
        console.error("Login failed:", error.message);
    } finally {
        await browser.close();
    }
}

const [,, email, password] = process.argv;
if (email && password) {
    loginOnlyFans(email, password);
} else {
    console.error("Usage: node index.js <email> <password>");
}
