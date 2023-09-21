import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Withdraw = ({balance,setBalance,addTrasaction}) => {

    const [withdrawAmount, setWithdrawAmount] = useState(0)
    const [Status, setStatus] = useState(false)  
    const [mensaje, setMensaje] = useState('') 
    

    function handleDeposit(e){
        const valor = e.currentTarget.value
        setWithdrawAmount(valor)

    }

    function handleClick(){
        const withdrawValue = parseFloat(withdrawAmount);

        function Mensaje(mensaje){
            setStatus(true)
            setMensaje(mensaje)
            setTimeout(() => setStatus(false),2000)
        }
        
        if (!isNaN(withdrawValue) && withdrawValue > 0 && balance - withdrawValue >= 0) {
            setBalance(prevBalance => prevBalance - withdrawValue);
            Mensaje('retiro exitoso')
            addTrasaction({tipo: 'Retiro', monto: withdrawValue, balance: balance - withdrawValue})
        }else if(withdrawValue.toString().includes('-')){
            Mensaje('El valor no puede ser negativo')
        }else if(balance - withdrawValue < 0){
            Mensaje('No puedes retirar más de lo que tienes')
        }
    }

    return (
        
            <div className="contenedor-deposit">
                <FormCard
                    bgcolor = 'primary'
                    header = 'Withdraw'
                    body = {
                        <>
                            <div>
                                <input type="number" value={withdrawAmount} onChange={handleDeposit}/>
                                <button onClick={handleClick} disabled = {!withdrawAmount}>Withdraw</button>
                            </div>
                            {Status && (
                                <h5>{mensaje}</h5>
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

export {Withdraw}