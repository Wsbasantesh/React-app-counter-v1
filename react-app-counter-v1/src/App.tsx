import { useState } from 'react'
import './App.css'
import './index.css';
import BasicTypes from './typescript/BasicTypes'
import ObjectLiterals from './typescript/ObjectLiterals'
import BasicFuntions from './typescript/BasicFuntions'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center h-svh'>
        <BasicTypes/>
        <ObjectLiterals/>
        <BasicFuntions/>
        <Counter/>
      </div>
    </>
  )
}

export default App
