import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Versionando minha aplicção web</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Corinthianssccp2023.png/800px-Corinthianssccp2023.png" />
  </div>
`

setupCounter(document.querySelector('#counter'))
