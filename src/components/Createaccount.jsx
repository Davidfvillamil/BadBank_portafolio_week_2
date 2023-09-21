import React, { useContext, useState } from "react"
import { FormCard, FormContext } from "../context.jsx/context"
import '../Styles/createAccount.css'


const Createaccount = () => {

    
    const [show,setShow] = React.useState(true)
    const [status, setStatus] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

   //cuadrar los errores que van a aparecer debajo de los input si se viola alguna restricción como no numeros ni @ en el nombre

   const [errorName, setErrorName] = useState('')
   const [errorEmail,setErrorEmail] = useState('')
   const [errorPassword,setErrorPassword] = useState('')

   const [errorNameStatus, setErrorNameStatus] = useState(false)
   const [errorEmailStatus,setErrorEmailStatus] = useState(false)
   const [errorPasswordStatus,setErrorPasswordStatus] = useState(false)

   const ctx = React.useContext(useContext)

    function validate (field, label) {
        if (!field) {
            setStatus('Ingrese correctamente su '+ label)
            setTimeout(() => setStatus(''),3000)
            return false
        }
        return true
    }

    function handleCreate () {
        console.log(name,email,password)
        if(!validate(name,'name')) return
        if(!validate(email,'email')) return
        if(!validate(password,'password')) return
        
        setShow(false)
    }

    function handleNameChange(e) {

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

    function handleEmailChange(e){
        const inputValue = e.currentTarget.value;
        setEmail(inputValue); 

        if (!inputValue.includes("@")) {
            setErrorEmail('ingrese un correo electronico valido');
            setErrorEmailStatus(true)
            setTimeout(() => setErrorEmail(''),2000)
        }else{
            setErrorEmail('')
            setErrorEmailStatus(false)
        }
    }

    function handlePasswordChange(e) {
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

   function clearForm () {
        setName('')
        setEmail('')
        setPassword('')
        setShow(true)
    }

    return(
        <div className="contenedor-create-account">
            <FormCard

                bgcolor = 'primary'
                header = 'Create Account'
                status = {status}
                body = {show ? (
                        <>
                            Name <br></br>
                            <input type = 'input' className = 'form-control' id = 'name' placeholder = 'Enter Name' value = {name} onChange = {handleNameChange}></input><br></br>
                            {errorName? (
                                <>
                                    <h6 style={{color:'red'}}>{errorName}</h6>
                                </>
                            ):(
                                <>
                                </>
                            )}
                            Email <br></br>
                            <input type = 'input' className = 'form-control' id = 'email' placeholder = 'Enter email' value = {email} onBlur = {handleEmailChange}onChange={e => setEmail(e.currentTarget.value)}></input><br></br>
                            {errorEmail? (
                                <>
                                    <h6 style={{color:'red'}}>{errorEmail}</h6>
                                </>
                            ):(
                                <>
                                </>
                            )}
                            Password <br></br>
                            <input type = 'input' className = 'form-control' id = 'password' placeholder = '********' value = {password} onChange = {handlePasswordChange}></input><br></br>
                            {errorPassword && (
                                <>
                                    <h6 style={{color:'red'}}>{errorPassword}</h6>
                                </>
                            )}
                            <button type = 'submit' className = 'btn btn-light' disabled = {!name && !email && !password || errorName || errorPasswordStatus || errorEmailStatus} onClick = {handleCreate}>Create Account</button>
                        </>
                    ):(
                        <>
                            <h4>¡You have succesfully created an account !</h4>
                            <button type = 'submit' className = 'btn btn-light' onClick = {clearForm}>Add Another Account</button>
                        </>
                )}
            ></FormCard>
        </div>
    )
}

export {Createaccount}