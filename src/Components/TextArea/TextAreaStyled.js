import styled from 'styled-components';

export const DivMain = styled.div`
    text-align:${props=>props.textAlign?props.textAlign:'unset'};
    margin:20px 0;
    @media(max-width:400px){
        margin:0;
        text-align:center;
        margin:10px 0;

    }
`

export const TextSpanStyled = styled.span`
    font-size:${props=>props.size};
    color:${props=>props.color};
    line-height:${props=>props.lineHeight ? props.lineHeight : '20px'};
    @media(max-width:400px){
        font-size:${props=>props.size.replace('px','')/1.3}px;
    }
`;

export const TextSpanStyledBranch = styled.span`
    color:#9D25B0;
    cursor: pointer;
    
`