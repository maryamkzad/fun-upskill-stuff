import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Weather Patterns</h1>
      <div>
        <p>We love weather. Here are some of the weather patterns that have been intresting lately.</p>
        {weatherData.map(weather => div key={weather.name})}
        <h3>Snow</h3>
        <ul>
          <li>All snowflakes are diffrent</li>
          <li>Its cold</li>
          <li>It reflects light (and can give you a sunburn)</li>
        </ul>
        </div> 


       
    </>
  )
}

export default App
