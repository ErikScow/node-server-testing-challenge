const request = require('supertest')

const server = require('./server')

describe('server.js', () => {

    it('should return a 201 status', async () => {
        const expectedStatusCode = 201
        const response = await request(server).post('/api/items')
        expect(response.status).toEqual(expectedStatusCode)
    })

    it('should should return a 200 status', async () => {
        const expectedStatusCode = 200
        const response = await request(server).get('/api/items')
        expect(response.status).toEqual(expectedStatusCode)
    })
})