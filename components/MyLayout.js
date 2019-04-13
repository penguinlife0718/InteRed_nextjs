import styled from 'styled-components';
import Nav from './Nav'
import Sidebar from './Sidebar';
function MyLayout(props) {
    return(
        <Background>
            <Nav/>
            <Sidebar/>  
            {props.children}
        </Background>
    )
}
export default MyLayout;
const Background = styled.div`
    min-width: calc(100vw - 180px); /*直覺這個要跟著 Sidebar 的值跑 240 -> 180*/
    padding: 72px 0 0 180px;
    overflow-x: hidden;
    background: #fafafa;
    @media (max-width: 1170px){
        padding-left: 0;
    }
    filter: ${props => props.isUserActive ? 'blur(5px)' : ''};
    transition: all .2s ease-in-out;
`