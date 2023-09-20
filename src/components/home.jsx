import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavLink } from "react-router-dom";


import '../Styles/home.css'

const Home = () => {
    return (
        <div className="contanedor-externo">
            <div className="contendor-interno">
                <h1 title="Titilo-home">Bienvenido a tu Banco</h1>
                <div className="imagen-banco-home"></div>
                <div className="contenedor-botones-home">
                    <NavLink to={'/login'}>
                        <button type="button" className="btn btn-primary">login</button>
                    </NavLink>
                    <NavLink to={'/createaccount'}>
                        <button type="button" className="btn btn-primary">Create Account</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export {Home}