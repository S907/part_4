import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'
import { useFetch } from './components/useFetch';
function App() {
  const [count, setCount] = useState(0);
  const {dta} =useFetch({
    url:"/jack.json"
  })  

  console.log('App rendering !!');
  return (
    <>
    <div className="App">
      <h1>Web Dev</h1>
      <p>{JSON.stringify(dta)}</p>
    </div>
    </>
  )
}

export default App
