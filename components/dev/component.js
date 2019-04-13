import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const Component = (props) => {
    return (
        <div></div>
    )
}
const mapStateToProps = state => {
    return {
        user: state.User,
        messages: state.Messages
    }
}
export default withRouter(connect(mapStateToProps)(Component));
const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    min-width: 900px;
    padding: 50px 0 120px 0;
    background-color: #fafafa;
    border-left: 1px solid #e6e6e6;
    font-size: 16px;
    font-weight: 300;
    color: #787878;
    @media (max-width: 900px){
        min-width: 320px;
    }
`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 900px;
    margin-top: 60px;            
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    @media (max-width: 900px){
        width: calc(100% - 40px);
        margin: 0 20px;
    }    
`