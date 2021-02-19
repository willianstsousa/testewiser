import styled from 'styled-components';

export const DivMain = styled.div`
  display:flex;
  flex-direction:column;
  font-size:10px;
  color:#383E71;
  width:100%;
`;

export const StyledInput = styled.input`
    height:48px;
    width:256px;
    border-radius:8px;
    border:1px solid #989FDB;
    margin:20px 0;
    padding: 0 10px ;
    background:inherit;
    color:#383E71;
    font-size:10px;
    :focus{
        outline:none;

    }
    @media(max-width:400px){
        width:200px;
        height:40px;
    }
`

export const SpanErroMessage = styled.span`
    margin:-10px 0 15px 0;
    color:#FF377F;
    display:${props=>props.display};
    cursor: default;

`