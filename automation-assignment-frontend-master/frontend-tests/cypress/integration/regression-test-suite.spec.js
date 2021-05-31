/// <reference types="cypress" />

/*
const ENDPOINT_GET_CLIENTS = 'http://localhost:3000/api/clients'
const ENDPOINT_POST_CLIENT = 'http://localhost:3000/api/client/new'
const ENDPOINT_GET_CLIENT = 'http://localhost:3000/api/client/'
const ENDPOINT_PUT_CLIENT = 'http://localhost:3000/api/client/1'

const ENDPOINT_GET_BILLS = 'http://localhost:3000/api/bills'

const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'
*/


import * as loginFuncs from '..pages/indexPage'
import * as dashBoardFuncs from '..pages/dashboardPage'

// This is a test suite
describe('Regression test suite', function(){
    //this is a test setup
    beforeEach( ()=>{
        cy.visit('http://localhost:3000')
        loginFuncs.checkLoginPageTitle(cy)
    })

    
    // This is a test case 1
    it('Test case1: Perform login and logout', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login') 
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
    // // This is a test case 2
    it('Test case 2: Get all clients', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login') 
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
    // This is a test case 3
    /*
    it('Test case 3: Create a client and delete it', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login') 
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
    // This is a test case 4
    it('Test case 4: Get all BillsRequest, function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login') 
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
    // This is a test case 5
    it('Test case 5: Get all rooms', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login') 
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })*/


})