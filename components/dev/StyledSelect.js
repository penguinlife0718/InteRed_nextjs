import styled from 'styled-components';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const StyledSelect = styled(Select)`
    max-width: 200px;
    min-width: 180px;
    box-sizing: border-box !important;
    .Select-control {
        height: 24px !important;        
        border: .5px solid #979797;
        border-radius: 0 !important;
        box-shadow: none !important;
        .Select-input {
            display: flex !important;
            align-items: center;
            height: 24px !important;
        }
        .Select-value {
            line-height: 24px !important;
        }
        .Select-value-label {
            color: #979797 !important;
        }
        .Select-clear-zone {
            display: none;
        }
    }
    .Select-menu-outer {
        .Select-option {
            &.is-selected {
                background-color: rgba(222, 6, 6, .1);  
            }
            &.is-focused {
                background-color: rgba(222, 6, 6, .3);             
            }
        }
    }
    .Select-placeholder {
        line-height: 24px;
    }
`
export default StyledSelect;