const express = require('express')
const next = require('next')

const PORT = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const fetch = require('isomorphic-unfetch')

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/data', async (req, res) => {
      const response = await fetch('https://s3-us-west-2.amazonaws.com/sueldohoy/usd')
      const json = await response.json()
      res.json(json)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, () => console.log(`Point your browser to: http://localhost:${PORT}\n`))
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })