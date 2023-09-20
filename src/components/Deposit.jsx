import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Deposit = ({balance,setBalance}) => {

    const [depositAmount, setDepositAmount] = useState(0)
    

    function handleDeposit(e){
        const valor = e.currentTarget.value
        setDepositAmount(valor)

    }

    function handleClick(){
        const depositValue = parseFloat(depositAmount);
        if (!isNaN(depositValue) && depositValue > 0) {
            setBalance(prevBalance => prevBalance + depositValue);
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
                                <input type="number" value={depositAmount} onChange={handleDeposit}/>
                                <button onClick={handleClick}>Deposit</button>
                            </div>
                            <div>
                                Tu balance es de:  {balance}
                            </div>
                        </>
                    }
                >

                </FormCard>
            </div>
        
    )
}

export {Deposit}