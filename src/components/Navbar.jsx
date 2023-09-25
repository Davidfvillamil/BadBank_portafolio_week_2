import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";



import '../Navbar.css'
import { Popup } from "../popups/Loginpopup";

const Navbar = () => {

    
   
    return (
        <>
            <nav className = "navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div> 
                        <NavLink to={'/'} className="BadBank-title">
                            <div className="navbar-brand">BadBank</div>
                        </NavLink>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            
                            <NavLink to={'/home'} className="NavLink-navbar">
                                <div className="nav-NavLink" aria-current="page">Home</div>   
                            </NavLink>

                            <NavLink to={'/login'} className="NavLink-navbar">
                                <div className="nav-NavLink" aria-current="page">Login</div>   
                            </NavLink>
                                
                            <NavLink to={'/createaccount'} className="NavLink-navbar">
                                <div className="nav-NavLink" >Create Account</div>        
                            </NavLink>
                            
                            <NavLink to={'/deposit'} className="NavLink-navbar">
                                <div className="nav-NavLink" >Deposit</div>
                            </NavLink>
                            
                            
                            <NavLink to={'/withdraw'} className="NavLink-navbar">
                                <div className="nav-NavLink">Withdraw</div>
                            </NavLink>
                            
                            
                            <NavLink to={'/alldata'} className="NavLink-navbar">
                                <div className="nav-NavLink">All Data</div>
                            </NavLink>
                            

                        </div>
                    </div>
                
                    <div className="navbar-brand">Usuario</div>

                    
                </div>
                
            </nav>

            
        </>
      
    )
}

export {Navbar}