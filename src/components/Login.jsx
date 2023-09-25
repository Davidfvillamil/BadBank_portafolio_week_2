import React, { useState } from "react"
import { FormCard, FormContext } from "../context.jsx/context"
import { NavLink } from "react-router-dom";

import '../Styles/login.css'


const Login = ({usuarios}) => {

    const [show,setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')

    const [name,setName] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorNameStatus,setErrorNameStatus] = useState('')

    const [password,setPassword] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorPasswordStatus,setErrorPasswordStatus] = useState('')

    function validate (field, label) {
        if (!field) {
            setStatus('Ingrese correctamente su '+ label)
            setTimeout(() => setStatus(''),3000)
            return false
        }
        return true
    }

    function handleLogin () {
        

        if(!validate(name,'name')) return
        if(!validate(password,'password')) return


        const usuarioExistente = usuarios.find(usuario => usuario.name === name);
        const passwordExistente = usuarios.find(usuario => usuario.password === password)

        if (!usuarioExistente) {
            setErrorName('El usuario no existe');
            setTimeout(() => setErrorName(''),3000)
        } else if(!passwordExistente) {
            setErrorName('Nombre de usuario o password incorrectos');
            setTimeout(() => setErrorName(''),3000)
        }else{

            setErrorName(''); // Resetear el mensaje de error si el usuario es válido
            setShow(false);
        }
        console.log(usuarios)
    }

    function handleNameChange(e){
        const inputValue = e.currentTarget.value;
        setName(inputValue); // Primero actualizamos el estado
        if (inputValue.includes("@")) {
            setErrorName('El nombre no puede contener @');
            setErrorNameStatus(true)
        }else if (inputValue.match(/[0-9]/)){
            setErrorName('El nombre no puede contener numeros')
            setErrorNameStatus(true)
        }else{
            setErrorName('')
            setErrorNameStatus(false)
        }

    }

    function handlePasswordChange(e){
        const inputValue = e.currentTarget.value;
        setPassword(inputValue)
        let arreglo = [...inputValue]
        if(arreglo.length >= 8){
            setErrorPassword('')
            setErrorPasswordStatus(false)
        }else{
            setErrorPassword('la contraseña no puede contener menosde 8 caracteres')
            setTimeout(() => setErrorPassword(''),2000)
            setErrorPasswordStatus(true)
        }
    }

    return (
        <div className="contenedor-login">
            <div className="mitad formulario-login">
                <FormCard
                    bgcolor = 'primary'
                    header = 'Login'
                    status = {status}
                    body = {show ? (
                        <>
                            User Name <br/>
                            <input type="text" className = 'form-control' id = 'name' placeholder = 'Enter User Name' value={name} onChange={handleNameChange}/>
                            {errorName? (
                                    <>
                                        <h6 style={{color:'red'}}>{errorName}</h6>
                                    </>
                                ):(
                                    <>
                                    </>
                                )}

                            Password <br/>
                            <input type="text" className = 'form-control' id = 'password' placeholder = '********' onChange={handlePasswordChange}/>
                            {errorPassword && (
                                    <>
                                        <h6 style={{color:'red'}}>{errorPassword}</h6>
                                    </>
                                )}  
                            <button type = 'submit' className = 'btn btn-light' onClick={handleLogin} disabled = {!name || !password || errorName || errorPasswordStatus} style={{backgroundColor: '#dd3f51 ', color: 'white', marginTop: '20px'}}>Login</button>

                            <div className="contenedor-imgagen-login">
                                    <div src="../images/imagen_login.png" alt="" className="imagen-dibujo-login"/>
                            </div>
                        </>
                    ):(
                        <>
                            <h4>Bievenido</h4><h4 style={{color:'green'}}>{name}</h4> 
                            <div className="contenedor-success-image-login">
                                        <div src="../images/loginsucces.png" alt="" className="imagen-dibujo-success-login"/>
                            </div>
                            <h3>¿Qué quieres hacer ahora?</h3>
                            <div className="contenedor-botones-success-login">
                                <NavLink to={'/deposit'}>
                                    <button type="button" className="btn" style={{backgroundColor: '#dd3f51 ', color: 'white'}}>Deposit</button>
                                </NavLink>
                                <NavLink to={'/withdraw'}>
                                    <button type="button" className="btn" style={{backgroundColor: '#dd3f51 ', color: 'white'}}>Withdraw</button>
                                </NavLink>
                            </div>
                        </>
                    )
                        
                    }
                >
                </FormCard>
            </div>
            <div className="contenedor-imgane-login mitad">
                <div className="imagen-login"></div>
            </div>
        </div>
    )
}

export {Login}