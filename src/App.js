import React,{useState,useEffect,createRef} from 'react'
import {DivMain,DivImage,DivColor,DivForm,Button} from './AppStyled';
import Input from './Components/Input/Input';
import TextArea from './Components/TextArea/TextArea';
import Api from './Api';
import Toastify from './Components/Toastify/Toastify';
const App =()=> {
  const [loginData, setLoginData] = useState('');
  const RefEmail = createRef(0);
  const RefPassword = createRef(0);


  const LoadLoginData = async()=>{
    const {data} = await Api.get('b768e4c2-c0c4-4fca-b455-e4d639808269');
    setLoginData(data);
  }

  const VerifyLoginData = (ObjLogin) =>{
    if((ObjLogin.Email === loginData.email) && (ObjLogin.Password === loginData.senha)){
      Toastify.success('Login realizado com sucesso!')
    }else{
      Toastify.error('Erro, verifique seu Email ou Senha e tente novamente')
    }
  }

  useEffect(()=>{
    LoadLoginData();
  },[])

  return (
    <DivMain>
      <DivImage>
        <DivColor />
      </DivImage>
      <DivForm>
        <TextArea color={'#383E71'} size={'40px'} lineHeight={'48px'} text={'Olá, seja bem vindo'}/>
        <TextArea color={'#989FDB'} size={'16px'}  text={'Para acessar a plataforma, faça seu login.'}/>
        <Input  ref={RefEmail} name={"E-mail"} type={"Text"} />
        <Input ref={RefPassword} name={"Senha"} type={"Password"} />
        <div style={{width:'100%'}}>
          <Button onClick={()=>VerifyLoginData({"Email":RefEmail.current.value,"Password":RefPassword.current.value})} >Entrar</Button>
        </div>
        <TextArea 
          textAlign={'center'} 
          color={'#989FDB'} 
          size={'14px'} 
          text={'Esqueceu seu login ou senha? Clique '} 
          branch={'aqui'} />
      </DivForm>
    </DivMain>
  );
}

export default App;
