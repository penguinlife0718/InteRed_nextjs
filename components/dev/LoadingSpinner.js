import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpinner = (props) => {
    return (
        <Wrapper AgencyManagement={props.AgencyManagement}>
            <Svg size={props.size} viewBox="0 0 50 50">
                <Circle class="path" cx="25" cy="25" r="20" fill="none" strokeWidth="3"></Circle>
            </Svg>
        </Wrapper>
    )
}
export default LoadingSpinner;
const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    ${({ AgencyManagement }) => AgencyManagement ? `align-items: flex-start; margin: 0` : ''};
    /* background-color: #e6dcdc; */
`
const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`
const dash = keyframes`
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
`
const Svg = styled.svg`
    animation: ${rotate} 2s linear infinite;
    width: ${props => props.size ? props.size : '50px'};
    height: ${props => props.size ? props.size : '50px'};
`
const Circle = styled.circle`
    stroke: #de0606;
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
`