import qs from 'qs' 
import path from 'path'
import express from 'express' //whaqts up with capital E?
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from './src/reducers' // this is reducers
import App from './src/containers/App'
import { renderToString } from 'react-dom/server'

const app = express()
const port = 3001

app.use('/static', express.static('dist'));
app.use(handleRender)

function handleRender(req, res) {
	const store = createStore(counterApp)

	const html = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	)

	const initialState = store.getState()

	res.send(renderFullPage(html, initialState))
}

function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
