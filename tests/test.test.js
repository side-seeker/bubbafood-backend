const request = require('supertest')
const express = require('express')
const router = require('../routes/')
const conn = require('../salesforce')

let app;

describe('test routes', () => {

    beforeAll(() => {
        app = new express()
        app.use('/api', router)
    })

    test('responds to /api/hello', async () => {
        const res = await request(app).get('/api/test/hello')
        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('<h1>hello</h1>')
    })

})
