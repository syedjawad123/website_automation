import { expect, Locator, Page } from '@playwright/test';
import ENV from '../utility/envAlias'
export class header {
  readonly page: Page;
  readonly TryForFreeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.TryForFreeButton = page.locator("//a[text()='Try for free']").first();
  }

  async goto(){
    await this.page.goto(ENV.WEBSITE_URL);
  }

  async clickOnTryFreeButton(){
    await this.TryForFreeButton.click();
  }
}