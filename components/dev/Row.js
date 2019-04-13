import styled from 'styled-components';

const row = styled.div`
    display: flex;
    position: ${props => props.position || 'initial'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.content || 'initial'};
    align-items: ${props => props.item || 'initial'};    
    height: ${props => props.height || 'auto'};
    width: ${props => props.width || '100%'};
    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};
    border-bottom: ${props => props.borderbottom ? '1px solid #dedede' : 'initial' };
    border-right: ${props => props.borderright ? '1px solid #dedede' : 'initial'};
    color: ${props => props.color};    
    font-size: ${props => props.size};    
    background-color: ${props => props.backgroundcolor};
    white-space: ${({ whiteSpace }) => whiteSpace ? whiteSpace : ''};    
`
export default row;