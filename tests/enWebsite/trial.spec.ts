import { test, expect } from '@playwright/test';
import { header } from '../../Src/enWebsite/header';
import { body } from '../../Src/enWebsite/body';

test('test', async ({ page }) => {
    const website_header = new header(page);
    const website_body = new body(page);
    await website_header.goto();
    await website_header.clickOnTryFreeButton();
    await website_body.completeStepOne();
    await website_body.completeStepTwo();
    await website_body.verify_trail_application_is_success();
});