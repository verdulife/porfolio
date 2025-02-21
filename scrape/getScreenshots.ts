import { chromium } from "playwright";
import { projects } from "./projects.ts";

async function getScreenshots({ url, title }: any) {
  const id = title.replaceAll(" ", "-").toLowerCase();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  await page.screenshot({ path: `public/screenshots/${id}.jpg`, fullPage: true });
  await browser.close();
}

projects.forEach(async (project) => getScreenshots(project));