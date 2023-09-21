import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Deposit = ({balance,setBalance}) => {

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
                                <input type="number" value={depositAmount} onChange={handleDeposit} placeholder="ingrese un valor"/>
                                <button onClick={handleClick} disabled ={!depositAmount}>Deposit</button>
                            </div>
                            {Status && (
                                <>
                                <h5>{mensaje}</h5>
                                </>  
                            )}
                            <div>
                                Tu balance es de: $ {balance}
                            </div>
                        </>
                    }
                >

                </FormCard>
            </div>
        
    )
}

export {Deposit}