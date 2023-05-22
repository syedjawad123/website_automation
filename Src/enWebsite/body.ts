import { expect, Locator, Page } from '@playwright/test';

export class body {
  readonly page: Page;
  readonly email_input_field: Locator;
  readonly step_one_button: Locator;
  readonly Name_input_Field: Locator;
  readonly Resto_name_Input_Field: Locator;
  readonly phone_Number_Input_Field: Locator;
  readonly terms_agree_checkbox: Locator;
  readonly step_two_button: Locator;
  readonly trail_success_message: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email_input_field = page.locator('#your-email');
    this.step_one_button = page.locator('#step-one-btn');
    this.Name_input_Field = page.locator('#name');
    this.Resto_name_Input_Field = page.locator('#resto-name');
    this.phone_Number_Input_Field = page.locator('#phone-num');
    this.terms_agree_checkbox = page.locator('#terms-agree');
    this.step_two_button = page.locator('#step-two-btn');
    this.trail_success_message = page.locator("//p[@class='header']"); 
  }

  async completeStepOne(){
    var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    var string = '';
    for(var ii=0; ii<15; ii++){
        string += chars[Math.floor(Math.random() * chars.length)];
    }
    let email = string.concat('@gmail.com');
    console.log(email);
    await this.email_input_field.type(email);
    await this.step_one_button.click();
  }

  async completeStepTwo(){
    await this.Name_input_Field.fill('QAtest');
    await this.Resto_name_Input_Field.fill('Test cafe');
    await this.phone_Number_Input_Field.fill('2342342234');
    await this.terms_agree_checkbox.click();
    await this.step_two_button.click();
  }

  async verify_trail_application_is_success(){
    await this.page.waitForTimeout(3000);
    expect(this.trail_success_message).toHaveText('Congratulations!');
  }
}