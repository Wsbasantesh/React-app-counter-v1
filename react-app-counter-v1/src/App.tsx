
import './App.css'
import './index.css';
import BasicTypes from './typescript/BasicTypes'
import ObjectLiterals from './typescript/ObjectLiterals'
import BasicFuntions from './typescript/BasicFuntions'
import Counter from './components/Counter'
import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
      <div className='flex flex-col justify-center items-center h-svh'>
        <BasicTypes/>
        <ObjectLiterals/>
        <BasicFuntions/>
        <Counter/>
        {/*<LoginPage /> */}
      </div>
      </AuthProvider>
    </>
  )
}

export default App
