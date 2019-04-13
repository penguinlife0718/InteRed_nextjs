import React from "react";
import styled from 'styled-components';

const InteRedIcon = ({ mobile }) => {
  return (
    <Svg height={'38px'} width={mobile ? '90px' :'140px'} version="1.1" viewBox="0 0 140 38">
      <defs />
      <g id="info" fill="none" stroke="none" strokeWidth="1">
        <g id="Info" transform="translate(-32.000000, -17.000000)">
          <g id="頂部選單_header">
            <g id="Logo" transform="translate(32.000000, 17.000000)">
              <rect height="38" id="Rectangle" width="140" fill="#DE0606" x="0" y="0" />
              <text id="InteRed." fill="#FFFFFF" fontFamily="Roboto" fontSize="32">
                <tspan x="9.12" y="31">
                  InteRed.
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </Svg>
  )
};
export default InteRedIcon;
const Svg = styled.svg`
  cursor: pointer;
`
