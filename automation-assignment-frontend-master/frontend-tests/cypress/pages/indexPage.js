/// <reference types="cypress" />

// elements
const titleOfIndexPage = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const loginButton = '.btn'

const clientViewButton = 'div.block:nth-child(2) > a:nth-child(3)'
const titleOfClients = 'Clients'


const billsViewButton = 'div.block:nth-child(3) > a:nth-child(4)'
const titleOfBills = 'Bills'


const roomsViewButton = 'div.block:nth-child(1) > a:nth-child(3)'
const titleOfRooms = 'Rooms'

const reservationsViewButton = 'div.block:nth-child(4) > a:nth-child(4)'
const titleOfReservations = 'Reservations'


// actions / functions

function checkTitleOfIndexPage(cy){
    cy.title().should('eq',titleOfIndexPage)
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

function getAllClientsRequest(cy, ){
    cy.get(clientViewButton).click()
    cy.contains(titleOfClients)
}
/*
function createClientRequestAndDelete(cy, ){
}
*/
function getAllBillsRequest(){
    cy.get(billsViewButton).click()
    cy.contains(titleOfBills)
}


function getAllRoomsRequest(){
    cy.get(roomsViewButton).click()
    cy.contains(titleOfRooms)
}

function getAllReservationsRequest(){
    cy.get(reservationsViewButton).click()
    cy.contains(titleOfReservations)
}

// exports
module.exports = {
    checkTitleOfIndexPage,
    performValidLogin,
    getAllClientsRequest,
    getAllBillsRequest,
    getAllRoomsRequest,
    getAllReservationsRequest

    /*
    createClientRequestAndDelete,
    */
}
