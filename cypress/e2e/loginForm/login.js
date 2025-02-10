import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
const homePage = require('../PageObject/homePage')

Given("A user opens the student registration form page",()=>{
      
    cy.visit("https://demoqa.com/automation-practice-form")
})

When ('A user fill form as Following', (datatable)=>{
    datatable.hashes().array.forEach(element => {
        homePage.typeUserName(element.username)
        homePage.typeLastName(element.lastName)
        homePage.selectGender(element.gender)
        homePage.typeEmail(element.email)
        homePage.typeMobile(element.mobile)
        homePage.typeSubjects(element.subjects)
        homePage.selectHobbies(element.hobbies)
    })
 
})

And ('A user clicks on the submit button',()=>{
    homePage.loginBtn()
})

Then ('Receiving submitting form with valid data', (datatable)=>{
    datatable.hashes().array.forEach(element => {
        cy.get('tr:nth-child(1) > td:nth-child(2)').should('have text', element.username)
        cy.get('tr:nth-child(2) > td:nth-child(2)').should('have text', element.email)
        cy.get('tr:nth-child(3) > td:nth-child(2)').should('have text', element.gender)
        cy.get('tr:nth-child(4) > td:nth-child(2)').should('have text', element.mobile)
        cy.get('tr:nth-child(5) > td:nth-child(2)').should('have text', element.subjects)
        cy.get('tr:nth-child(6) > td:nth-child(2)').should('have text', element.hobbies)
  
    })

    Then ('Validate message appear', ()=>{

    })
})