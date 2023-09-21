import React from "react";

const Alldata = ({transactions}) => {
    return (
        <div className="contenedor-tabla">
            <h2>Registro de Transacciones</h2>
            <table className="table">
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
    )
}

export {Alldata}