import 'reflect-metadata'
import React from 'react'
import { render } from 'react-dom'
import { useEffectModule } from '@sigi/react'
import { initDevtool } from '@sigi/devtool'

import { AppModule } from './app.module'

function App() {
  const [{ list }, dispatcher] = useEffectModule(AppModule)

  const loading = !list ? <div>loading</div> : null

  const title = list instanceof Error ? <h1>{list.message}</h1> : <h1>Hello CodeSandbox</h1>

  const listNodes = Array.isArray(list) ? list.map((value) => <li key={value}>{value}</li>) : null
  return (
    <div>
      {title}
      <button onClick={dispatcher.fetchList}>fetchList</button>
      <button onClick={dispatcher.cancel}>cancel</button>
      {loading}
      <ul>{listNodes}</ul>
    </div>
  )
}

const rootElement = document.getElementById('app')
render(<App />, rootElement)

initDevtool()