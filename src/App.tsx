import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My App</h1>
      <p>A fresh Vite + React + TypeScript project, ready to build on.</p>
      <button onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>
    </div>
  )
}

export default App
