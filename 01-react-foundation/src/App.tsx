import { Contador } from './Actividades'
import Greeting from './Actividades/Greeting'
import { Counter } from './components/Counter'
import { CounterWithHook } from './components/CounterWithHook'
import { LoginPage } from './components/LoginPage'
import { UserPage } from './components/UserPage'
import React from 'react'

function App() {


  return (
    <>

    <Contador/>

    <Greeting name={'Pedro'} age={24} isStudent={true}/>
      {/* <h1>Introduccion a TS - React</h1> */}

      {/* <Counter/> */}
      {/* <CounterWithHook/> */}
      {/* <LoginPage/> */}
        {/* <UserPage/> */}
    </>
  )
}

export default App
