const faker = require('faker')

const ENDPOINT_GET_CLIENTS = 'http://localhost:3000/api/clients'
const ENDPOINT_POST_CLIENT = 'http://localhost:3000/api/client/new'
const ENDPOINT_GET_CLIENT = 'http://localhost:3000/api/client/'
const ENDPOINT_PUT_CLIENT = 'http://localhost:3000/api/client/1'

const ENDPOINT_GET_BILLS = 'http://localhost:3000/api/bills'

const ENDPOINT_GET_ROOMS = 'http://localhost:3000/api/rooms'

function createRandomClientPayload(){
    const fakeName = faker.name.firstName()
    const fakeEmail = faker.internet.email()
    const fakePhone = faker.phone.phoneNumber()

    const payload = {
        "name":fakeName,
        "email":fakeEmail,
        "telephone":fakePhone
    }

    return payload
}

function getRequestAllClientsWithAssertion(cy,name,email,telephone){
    // GET request to fetch all clients
    cy.request({
        method: "GET",
        url: ENDPOINT_GET_CLIENTS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        const responseAsString = JSON.stringify(response)
        expect(responseAsString).to.have.string(name)
        expect(responseAsString).to.have.string(email)
        expect(responseAsString).to.have.string(telephone)

        cy.log(response.body[0].id)
        cy.log(response.body[0].name)
        cy.log(response.body[0].email)
        cy.log(response.body[0].telephone)
        
        cy.log(response.body[response.body.length -1].id)
        cy.log(response.body[response.body.length -1].name)
        cy.log(response.body[response.body.length -1].email)
        cy.log(response.body[response.body.length -1].telephone)
        cy.log(response.body.length)
    }))
}

function getAllClientsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_CLIENTS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
           
        }))

    }))

}

function deleteRequestAfterGet(cy,name,email,telephone){
    // GET request to fetch all clients
    cy.request({
        method: "GET",
        url: ENDPOINT_GET_CLIENTS,
        headers:{
            'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
            'Content-Type': 'application/json'
        },
    }).then((response =>{
        //const responseAsString = JSON.stringify(response)
        let lastId = response.body[response.body.length -1].id
        cy.request({
            method: "DELETE",
            url: ENDPOINT_GET_CLIENT + lastId,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{               
            const responseAsString = JSON.stringify(response.body)
            cy.log(responseAsString)
            expect(responseAsString).to.have.string("true")
         }))
    }))
}

function createClientRequest(cy){
    cy.authenticateSession().then((response =>{
        let fakeClientPayload = createRandomClientPayload() 
        
        // post request to create a client
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:fakeClientPayload 
        }).then((response =>{               
           const responseAsString = JSON.stringify(response)
           expect(responseAsString).to.have.string(fakeClientPayload.name)
        }))

        getRequestAllClientsWithAssertion(cy,fakeClientPayload.name,fakeClientPayload.email,fakeClientPayload.telephone)
    }))
}

function createClientRequestAndDelete(cy){
    cy.authenticateSession().then((response =>{
        let fakeClientPayload = createRandomClientPayload() 
        
        // post request to create a client
        cy.request({
            method: "POST",
            url: ENDPOINT_POST_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body:fakeClientPayload 
        }).then((response =>{               
           const responseAsString = JSON.stringify(response)
           expect(responseAsString).to.have.string(fakeClientPayload.name)
        }))

        deleteRequestAfterGet(cy)

        //getRequestAllClientsWithAssertion(cy,fakeClientPayload.name,fakeClientPayload.email,fakeClientPayload.telephone)
    }))
}



function getAllBillsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_BILLS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
           
        }))

    }))

}

function getAllRoomsRequest(cy){
    cy.authenticateSession().then((response =>{
        cy.request({
            method: "GET",
            url: ENDPOINT_GET_ROOMS,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
        }).then((response =>{
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)
           
        }))

    }))

}

function changeClientInfo(cy){
    cy.authenticateSession().then((response =>{
    
        cy.request({
            method: "PUT",
            url: ENDPOINT_PUT_CLIENT,
            headers:{
                'X-User-Auth': JSON.stringify(Cypress.env().loginToken),
                'Content-Type': 'application/json'
            },
            body: {
                "id":1,
                "name":"Kristina1",
                "email":"k1@email.com",
                "telephone":"070000000011"
            }
 
        }).then((request =>{
            expect(response.status).to.eq(200)
            //cy.log(JSON.stringify(respons.body))
            const responseAsString = JSON.stringify(response)
            cy.log(responseAsString)           
        }))
    }))
}   



module.exports = {
    createRandomClientPayload,
    createClientRequest,
    getAllClientsRequest,
    createClientRequestAndDelete,
    deleteRequestAfterGet,
    changeClientInfo,
    getAllBillsRequest,
    getAllRoomsRequest
    
}