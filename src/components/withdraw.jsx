import React, { useState } from "react";

//Estilos
import '../Styles/Deposit.css'
import { FormCard } from "../context.jsx/context";

//Contextos


const Withdraw = ({balance,setBalance}) => {

    const [withdrawAmount, setWithdrawAmount] = useState(0)
    

    function handleDeposit(e){
        const valor = e.currentTarget.value
        setWithdrawAmount(valor)

    }

    function handleClick(){
        const withdrawValue = parseFloat(withdrawAmount);
        if (!isNaN(withdrawValue) && withdrawValue > 0) {
            setBalance(prevBalance => prevBalance - withdrawValue);
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
                                <button onClick={handleClick}>Withdraw</button>
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

export {Withdraw}