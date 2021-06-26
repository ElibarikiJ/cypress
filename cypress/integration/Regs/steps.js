const pactum = require('pactum');
import { Given, When, Then, Before, After } from "cypress-cucumber-preprocessor/steps";

let spec;

Before(() => { spec = pactum.spec(); })

Given('I make a GET request to {string}',  (url) => {
    spec.get(url).expectStatus(200).expectBody('OK');
})

When('I receive a response', async () => {
   await spec.toss();
})

Then('response should have a status {int}', async (code) => {
    spec.response().should.have.status(code);
})