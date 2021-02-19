import React,{useState,forwardRef} from 'react';
import {DivMain,StyledInput,SpanErroMessage} from './InputStyled';
const Input = forwardRef((props,ref)=>{
  const [erroMessage, setErroMessage] =useState('');

    const VerifyEmail = (value)=>{
        if(!((value.includes('@')) && (value.includes('.com')))){
            setErroMessage('Digite um e-mail válido;')
        }else{
            setErroMessage('')
        }
    }

    return(
         <DivMain>
            <span style={{marginLeft:'5px'}}>{props.name}</span>
            <StyledInput onBlur={(event)=>VerifyEmail(event.target.value)} ref={ref} type={props.type}/>
            <SpanErroMessage display={props.type ==='Text'?'unset':'none'}>{erroMessage}</SpanErroMessage>
        </DivMain>
    )}
)

export default Input;