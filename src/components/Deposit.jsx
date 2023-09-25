import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Deposit = ({balance,setBalance,addTrasaction,usuarios}) => {

    const [depositAmount, setDepositAmount] = useState(0)
    const [Status, setStatus] = useState(false)  
    const [mensaje, setMensaje] = useState('')                         // estado para mirar si se muestra o no el mensaje de transacción
    
    function handleDeposit(e){
        const valor = e.currentTarget.value
        setDepositAmount(valor)
    }

    function handleClick(){
        const depositValue = parseFloat(depositAmount);
        
        if (!isNaN(depositValue) && depositValue > 0) {
            setBalance(prevBalance => prevBalance + depositValue);
            setStatus(true)
            setMensaje('Transacción aprovada')
            setTimeout(() => setStatus(false),2000)
            addTrasaction({tipo: 'Deposito', monto: depositValue, balance: balance + depositValue})
        }else if(depositValue.toString().includes('-')){
            setStatus(true)
            setMensaje('El valor no puede ser negativo')
            setTimeout(() => setStatus(false),2000)
        }
    }

    

    return (
        
            <div className="contenedor-deposit">
                <FormCard
                    bgcolor = 'primary'
                    header = 'Deposit'
                    
                    body = {
                        <>
                            <div>
                                <h1>
                                    David Villamil 
                                </h1> <br />
                                <div className="contenedor-balance">
                                    <h6>Tu balance</h6>
                                    <h3>US $ {balance}</h3>
                                </div>
                                <h3>Deposit</h3>
                                <h6>Escoge una suma</h6>
                                <input type="number" value={depositAmount} onChange={handleDeposit} placeholder="ingrese un valor"/>
                                <button className = 'btn boton-deposit'onClick={handleClick} disabled ={!depositAmount} style={{backgroundColor: '#dd3f51 ', color: 'white', marginTop: '10px'}}>Deposit</button>
                            </div>
                            {Status && (
                                <>
                                <h5 className="mensaje-de-aprovado">{mensaje}</h5>
                                </>  
                            )}
                            
                        </>
                    }
                >

                </FormCard>
            </div>
        
    )
}

export {Deposit}