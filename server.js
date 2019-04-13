const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const nextI18NextMiddleware = require('next-i18next/middleware')
const nextI18next = require('./i18n')

app
    .prepare()
    .then(() => {
        const server = express()
        // server.get('/p/:id', (req, res) => {
        //     const actualPage = '/post'
        //     const queryParams = { title: req.params.id }
        //     app.render(req, res, actualPage, queryParams)
        // })
        // server.get('/posts/:id', (req, res) => {
        //     return app.render(req, res, '/posts', { id: req.params.id })
        // })
        server.use(nextI18NextMiddleware(nextI18next))
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, err => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch(ex => {
        console.error(ex.stack)
        process.exit(1)
    })