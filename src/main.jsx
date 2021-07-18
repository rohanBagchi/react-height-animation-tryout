import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import './github-ribbon.css'

ReactDOM.render(
  <React.StrictMode>
    <a
      className="gh-ribbon darkblue right"
      href="https://github.com/rohanBagchi/react-height-animation-tryout"
      target="_blank"
    >
      View on GitHub!
    </a>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
