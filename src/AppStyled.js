import styled from 'styled-components';
import Image from './Image/ImgTestWiser.jpg'

export const DivMain = styled.div`
  width:100vw;
  height:100vh;
  display:flex;
`;
export const DivColor = styled.div`
    height:100%;
    width:100%;
    background: rgb(19,5,37);
    background: linear-gradient(0deg, rgba(19,5,37,1) 0%, rgba(105,57,153,1) 100%);
    opacity:0.3;
`
export const ImageDesktop = styled.img`
    width:50vw;
`
export const DivImage = styled.div`
    width:50%;
    height:100%;
    background-image:url(${Image});
    background-size:cover;
    background-position: center;
    @media(max-width:1000px){
        width:30%;
    }
    @media(max-width:400px){
        width:100%;
        position:relative;
    }
`

export const DivForm = styled.div`
width:257px;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
margin-left:60px;
@media(max-width:400px){
        position:absolute;
        background:#fff;
        height:65%;
        padding:20px;
        border-radius:20px;
        margin:80px 40px;
        }
`

export const Button = styled.button`
    height:48px;
    width:278px;
    font-family:Montserrat,sans-serif;
    font-weight:600;
    font-style:SemiBold;
    font-size:16px;
    line-height:20px;
    background: linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%);
    box-shadow: 0px 10px 25px #CF99DB;
    margin: 10px 0;
    padding: 15px 45px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: #FFFFFF;            
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
    cursor: pointer;
    :hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
    }
    :focus{
        outline:none;
    }

    @media(max-width:400px){
        width:225px;
    }
`;