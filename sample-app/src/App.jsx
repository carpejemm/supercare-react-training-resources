import { useState } from 'react'
import SampleComponent from './components/SampleComponent.jsx'
import AnotherComponent from './components/AnotherComponent.jsx'
import './App.css'
import Items from './components/Items.jsx'
import ReactData from './components/ReactData.jsx'

const App = () => {
// function App() {
  // React Hooks - useState
  // const count = 0
  // const setCount = (0) => {
  //  count = count + 1
  // }
  const [count, setCount] = useState(0)

  const artist = 'Justin Bieber'
  const song = 'Ghost'
  const album = 'Justice'
  const numberOfSongs = 10

  const sampleFunction = () => {
    return 'This is a sample function'
  }


  return (
    // Empty fragment to avoid adding an extra node to the DOM
    // React Fragments can also be used here
    <> 
    {/* inline styling */}
      <div style={{ textAlign: 'center', marginTop: '50px', border: '1px solid #ccc', padding: '20px' }}>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Artist: {artist}</p>
      <p>Song: {song}</p>
      <p>Album: {album}</p>
      <p>Count: {10 + 10 + 10 + numberOfSongs}</p>
      <SampleComponent />
      <AnotherComponent />

      {/* Ternary Operator */}
      <div>{ count > 5 ? 10 + 10 + 10 + numberOfSongs : 0 }</div>

      Render String: {sampleFunction()}

      <Items />
      <ReactData />
      </div>
    </>
  )
}

export default App

// if (count > 5) {
//   count = 10 + 10 + 10 + numberOfSongs
// } else {
//   count = 0
// }