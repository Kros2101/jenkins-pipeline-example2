import * as clientHelpers from '../helpers/clientHelpers'


describe('testing auth', function(){
    it('Create a new client', function(){
        clientHelpers.createClientRequest(cy)
    })

    it('Get all clients', function(){
        clientHelpers.getAllClientsRequest(cy)
    })

    it('Create a client and delete it', function(){
        clientHelpers.createClientRequestAndDelete(cy)
    })

    it('Get all BillsRequest', function(){
        clientHelpers.getAllBillsRequest(cy)
    })
    it('Get all rooms', function(){
        clientHelpers.getAllRoomsRequest(cy)
    })

    it('Edit name & email: X', function(){
        clientHelpers.changeClientInfo(cy)
    })

})