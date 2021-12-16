import React,{useState} from 'react'
import SignUpForm from './SignUpForm'
import SignuoFrmSucess from './SignFormSucces'


const Form = () => {
    const[formIsSubmitted, setFormSubmitted] = useState(false)
    const submitForm = () => {
        setFormSubmitted(true)
    }
    return    <div>{!formIsSubmitted ? <SignUpForm submitForm={submitForm}/> : <SignuoFrmSucess/> }</div>
     
    
}

export default Form
