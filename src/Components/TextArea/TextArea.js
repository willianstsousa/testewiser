import React from 'react';
import {DivMain,TextSpanStyled,TextSpanStyledBranch} from './TextAreaStyled'
const TextArea = (props)=>{

    return(
        <DivMain textAlign={props.textAlign}>
            <TextSpanStyled lineHeight={props.lineHeight} color={props.color} size={props.size}>
                {props.text}
                <TextSpanStyledBranch>
                    <u>{props.branch}</u>
                </TextSpanStyledBranch>
            </TextSpanStyled>
        </DivMain>
    )
}

export default TextArea;