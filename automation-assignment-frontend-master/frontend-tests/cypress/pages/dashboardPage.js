/// <reference types="cypress" />

const { checkTitleOfIndexPage } = require("./indexPage")

// elements
const titleOfDashboardPage = 'Testers Hotel'
const logoutButton = '.user > .btn'



// Actions / functions

function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)

}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)

    

}

// exports
module.exports = {
    checkTitleOfDashboardPage,
    performLogout

}