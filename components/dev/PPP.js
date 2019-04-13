import React from 'react'
import styled from 'styled-components';
import Plx from "react-plx";
import { withRouter } from 'react-router';


const exampleParallaxData = [
    {
        start: 'self',
        end: 300,
        properties: [
            {
                startValue: 0,
                endValue: 90,
                property: "rotate"
            },
            {
                startValue: 1,
                endValue: 1.5,
                property: "scale"
            },
            {
                startValue: 1,
                endValue: 0.75,
                property: "opacity"
            }
        ]
    },
    {
        start: 350,
        duration: 300,
        properties: [
            {
                startValue: "#3cb99c",
                endValue: "rgba(50,50,200,0.8)",
                property: "backgroundColor"
            },
            {
                startValue: 0,
                endValue: 100,
                property: "translateY"
            },
            {
                startValue: 0.75,
                endValue: 1,
                property: "opacity"
            }
        ]
    },
    {
        start: 700,
        duration: 1000,
        properties: [
            {
                startValue: 100,
                endValue: 0,
                property: "translateY"
            },
            {
                startValue: 1.5,
                endValue: 2,
                property: "scale"
            },
            {
                startValue: 90,
                endValue: 0,
                property: "rotate"
            },
            // Blur is not performant
            // Used just as an example for CSS filters
            {
                startValue: 0,
                endValue: 2,
                property: "blur"
            }
        ]
    }
];
const StyledPlx = styled(Plx)`
    width: 100;
    height: 100;
    line-height: 100px;
    text-align: center;
    border-radius: 20px;
    background-color: #34ba9c;
    color: #fff;
    left: 50%;
    margin-left: -50;
    top: 100;
    position: fixed;
    font-family: Helvetica, Arial, sans-serif;
`
const Wrap = styled.div`
    height: 3000px;
`
const PPP = () => {
    return (
        <Wrap>
            <StyledPlx parallaxData={exampleParallaxData}>
                哥這個藥沒效Ｒ
            </StyledPlx>
        </Wrap>
    )
}

export default withRouter(PPP);