import React from "react";
import '../Styles/alldata.css'

const Alldata = ({transactions}) => {
    return (
        <div className="contenedor-tabla-externo">
            <div className="contenedor-tabla-interno">
                <h2>Registro de Transacciones</h2>
                <table className="table tabla">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Transacción</th>
                        <th scope="col">Monto</th>
                        <th scope="col">Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{transaction.tipo}</td>
                        <td>{transaction.monto}</td>
                        <td>{transaction.balance}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export {Alldata}