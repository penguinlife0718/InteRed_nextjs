import React from 'react';
import styled from 'styled-components';

const Check = (props) => {
    const { width, height, isCheck, size} = props
    return (
        <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26' width={width || size || 15} height={height || size || 15} isCheck={isCheck} >
            <path d='m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z'
                fill='#787878' />
        </Svg>
    )
}
export default Check;
const Svg = styled.svg`
    display: ${props => props.isCheck ? 'initial' : 'none'};
`