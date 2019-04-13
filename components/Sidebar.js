import React from 'react'
import styled, {keyframes} from 'styled-components';
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import StyleLink from './dev/StyleLink'
import StarIcon from './icon/StarIcon'
import SearchIcon from './icon/SearchIcon'
import UserIcon from './icon/UserIcon'
import LotteyIcon from './icon/LotteyIcon'

const renderSideBarList = ({ name, url, icon }, pathname) => {
    return (
        <StyleLink to={url}>
            <SidebarContentWrap isFocused={pathname === url}>
                {renderIcon(icon)}
                <SidebarContent>{name}</SidebarContent>
            </SidebarContentWrap>
        </StyleLink>
    )
}
const renderIcon = icon => {
    return (
        <React.Fragment>
            {icon === StarIcon && <StarIcon />}
            {icon === SearchIcon && <SearchIcon />}
            {icon === UserIcon && <UserIcon />}
            {icon === LotteyIcon && <LotteyIcon/>}
        </React.Fragment>
    )
}
const Sidebar = props => {
    const { pathname } = props.router
    const { messages } = props
    const SideBarList = [
        { name: messages.slide_ranking, url: '/', icon: StarIcon },
        { name: messages.slide_search, url: '/InfoList', icon: SearchIcon },
        { name: messages.slide_project_management, url: '/Proposal', icon: UserIcon },
        { name: messages.slide_lottery, url: '/Lottery', icon: LotteyIcon },
    ]
    return (
        <SidebarWrap>
            {SideBarList.map(list => renderSideBarList(list, pathname))}
        </SidebarWrap>
      )
}
const mapStateToProps = state => {
    return {
        messages: state.Messages
    }
}
export default withRouter(connect(mapStateToProps)(Sidebar));
const SidebarWrap = styled.div`
    position: fixed;
    width: 180px;
    top: 72px ;
    left: 0;
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    background-color: #fafafa;
    @media (max-width: 1170px){
        display: none;
    }
`;

const SidebarContentWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 17px 0 17px 48px;
    color: ${props => props.isFocused ? '#de0606' : '#999999'};
    font-size: 14px;
    font-weight: 300;
    transition: color .2s;
    svg, img {
        path, polygon, g { fill: ${props => props.isFocused ? '#de0606' : '#999999'}; }
    }
    cursor: pointer;
    :hover {
        color: ${props => props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999'};
        font-weight: 500;
        background-color: hsl(0, 0%, 92%);
    }
    &:hover > svg {
        path,
        polygon,
            g {
                fill: ${props => props.isFocused ? '#de0606' : '#787878'};
            }
    }
`;
const SidebarContent = styled.div`
    margin-left: 10px;
`