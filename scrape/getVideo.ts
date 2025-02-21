import { chromium } from "playwright";

const web = {
  url: "https://www.kncelados.com/",
  title: "kncelados-podcast",
}

async function getVideo(url: string) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: `public/screenshots/${web.title}.jpg`, fullPage: true });
  await browser.close();
}

getVideo(web.url);