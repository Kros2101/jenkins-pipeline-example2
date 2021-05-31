/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashBoardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'

// Test suite
describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
    })


    // Test case
    it('Test case1: Perform login and logout', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        dashBoardFuncs.performLogout(cy, 'Login')
    })

    it('Test case 2: Get all clients', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        indexFuncs.getAllClientsRequest(cy, 'Clients')
        dashBoardFuncs.performLogout(cy, 'Login')
    })


    it('Test case 3: Get all BillsRequest', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        indexFuncs.getAllBillsRequest(cy, 'Bills')
        dashBoardFuncs.performLogout(cy, 'Login')

    })
    
    it('Test case 4: Get all rooms', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        indexFuncs.getAllRoomsRequest(cy, 'Rooms')
        dashBoardFuncs.performLogout(cy, 'Login')
    })
    


    it('Test case 5: Get all reservations', function(){
        indexFuncs.performValidLogin(cy,targets.username,targets.password,'Tester Hotel Overview')
        indexFuncs.getAllReservationsRequest(cy, 'Rooms')
        dashBoardFuncs.performLogout(cy, 'Login')
    })


    /*
    it('Test case x: Create a client and delete it', function(){
        clientHelpers.createClientRequestAndDelete(cy)
    })

    it('Edit name & email: X', function(){
        clientHelpers.changeClientInfo(cy)
    })*/

})