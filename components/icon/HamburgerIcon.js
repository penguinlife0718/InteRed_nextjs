import React from 'react';

const HamburgerIcon = props => {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' id='Capa_1' viewBox='0 0 53 53'
            width={props.size || '10'} 
            height={props.size || '10'}>
            <g fill= {props.color || '#666'}>
                <path d='M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z'
                />
                <path d='M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z'
                />
                <path d='M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z'
                />
            </g>
        </svg>
    )
}
export default HamburgerIcon;

