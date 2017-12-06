import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from './components/App'

const appEl = document.getElementById('app')

ReactDOM.render(<App />, appEl)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.unmountComponentAtNode(appEl)
    const { App: NextApp } = require('./components/App')
    ReactDOM.render(<NextApp />, appEl)
  })
}