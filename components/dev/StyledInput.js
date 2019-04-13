import styled from 'styled-components';
const Input = styled.input`
    width: 100%;
    padding-left: 5px;
    border: solid 1px #dedede;
    font-size: 14px;
    font-weight: 300;
    color: #999999;
    margin-bottom: 8px;
    &:focus {
        border: solid 1px #999999;
        outline: none;
    }
`
export default Input;