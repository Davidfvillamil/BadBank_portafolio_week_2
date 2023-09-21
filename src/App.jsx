import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import del Router

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Componentes 
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'
import { Createaccount } from './components/Createaccount'
import { Balance } from './components/Balance'
import { Deposit } from './components/Deposit'
import { Withdraw } from './components/withdraw'
import { Alldata } from './components/Alldata'
import { Home } from './components/home'

//Contextos
import { FormContext, FormCard } from './context.jsx/context'




function App() {

  const[balance,setBalance] = useState(0)

  return (
    <FormContext.Provider value={''}>
    
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element = {<Home></Home>}/>
            <Route path='/login' element = {<Login></Login>}/>
            <Route path='/createaccount' element = {<Createaccount></Createaccount>}></Route>
            <Route path='/balance' element = {<Balance></Balance>}></Route>
            
            <Route path='/deposit' element = {<Deposit balance ={balance} setBalance={setBalance}></Deposit>}></Route>
            <Route path='/withdraw' element = {<Withdraw balance ={balance} setBalance={setBalance}></Withdraw>}></Route>
            <Route path='/alldata' element = {<Alldata></Alldata>}></Route>
            
          </Routes>
          
      </Router>
      
    </FormContext.Provider>
  )
}

export default App
