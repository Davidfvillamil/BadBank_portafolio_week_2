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
  const[transctions, setTransactions] = useState([])

  const handletransaction = (transaction) => {
    setTransactions([...transctions,transaction])
  }

  const [usuarios, setUsuarios] = useState([])
  const [usuarioActivo, setUsuarioActivo] = useState('')

  return (
    <FormContext.Provider value={''}>
    
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element = {<Home></Home>}/>
            <Route path='/home' element = {<Home></Home>}/>
            <Route path='/login' element = {<Login usuarios = {usuarios} setUsuarios = {setUsuarios}usuarioActivo = {usuarioActivo} setUsuarioActivo = {setUsuarioActivo}></Login>}/>
            <Route path='/createaccount' element = {<Createaccount usuarios = {usuarios} setUsuarios = {setUsuarios}></Createaccount>}></Route>
            <Route path='/balance' element = {<Balance></Balance>}></Route>
            <Route path='/deposit' element = {<Deposit balance ={balance} setBalance={setBalance} transactions = {transctions} setTransactions = {setTransactions} addTrasaction ={handletransaction} usuarios = {usuarios} setUsuarios = {setUsuarios}></Deposit>}></Route>
            <Route path='/withdraw' element = {<Withdraw balance ={balance} setBalance={setBalance}addTrasaction ={handletransaction}></Withdraw>}></Route>
            <Route path='/alldata' element = {<Alldata balance ={balance} setBalance={setBalance} transactions = {transctions} setTransactions = {setTransactions} addTrasacition ={handletransaction}></Alldata>}></Route>
          </Routes>
          
      </Router>
      
    </FormContext.Provider>
  )
}

export default App
