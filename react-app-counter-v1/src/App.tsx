import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicTypes from './typescript/BasicTypes'
import ObjectLiterals from './typescript/ObjectLiterals'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh'>
        <BasicTypes/>
        <ObjectLiterals/>
      </div>
    </>
  )
}

export default App
