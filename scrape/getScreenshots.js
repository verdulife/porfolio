import { chromium } from "playwright";
import { projects } from "./projects.js";

async function getScreenshots({ url, title }) {
  const id = title.replaceAll(" ", "-").toLowerCase();
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(url);
  await page.locator("body").screenshot({ path: `public/screenshots/${id}.jpg` });
  await browser.close();
}

projects.forEach(async (project) => getScreenshots(project));