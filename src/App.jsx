import './App.css'
import Navbar from './components/navbar'
import Content from './components/content'
import React from 'react'

function App() {
  const [mode, setMode] = React.useState('dark')

  function handleClick(){
    setMode(prevMode => {
      const newMode = prevMode == 'dark' ? 'light' : 'dark'
      return newMode
    })
    console.log('Mode Changed')
  }

  console.log("Mode", mode)


  return (
    <div className={mode == 'dark' ? '' : 'app'}>
      <Navbar mode={mode} modeChange = {handleClick} />
      <Content mode={mode} />
    </div>  
  )
}

export default App
