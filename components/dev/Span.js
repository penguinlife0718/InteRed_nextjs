import React from 'react';
import styled from 'styled-components';

const comma = (props) => {
    if (isNaN(props)) {
        return props;
    }
    else {
        return Number(props).toLocaleString()
    }
}
const SpanWithComma = (e) => {
    return (
        <span {...e}>
            {comma(e.children)}
        </span>
    )
}

const Span = styled(SpanWithComma)`
    width: auto;
    max-width: 100%;
    overflow-wrap: break-word;
    
    margin: ${props => props.margin || '0px'};
    font-size: ${props => props.size ? props.size : props.spanTitle ? '1rem' : props.subTitle ? '0.8rem' : '0.6rem'};
    font-weight: ${props => props.spanTitle ? '500' : props.subTitle ? '400' : props.weight || '300'};
    color: ${props => props.color ? props.color : props.spanTitle ? '#666666' : props.subTitle ? '#666666' : props.youtubeRed ? '#de0606' : '#787878'};
    ${({ highlight }) => highlight ? 'color: #de0606; font-weight: 500' : ''}
`


export default Span;