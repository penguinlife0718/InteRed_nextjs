import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import StyleLink from './dev/StyleLink'
import InteRedIcon from "./icon/InteRedIcon";
import HamburgerIcon from './icon/HamburgerIcon'

const { REACT_APP_URI = '/' } = process.env
class Nav extends Component {
	state = {
		hamburgerIsActive: false,
		userListIsActive: false,
		languageListIsActive: false,
	}
	hamburgerToggle = () => this.setState({ hamburgerIsActive: !this.state.hamburgerIsActive })
	userListToggle = () => this.setState({ userListIsActive: !this.state.userListIsActive })
	languageListToggle = () => this.setState({ languageListIsActive: !this.state.languageListIsActive })
	signOut = () => {
		const { user: { token } } = this.props
		fetch(`${REACT_APP_URI}/accounts/logout/`, {
			method: 'post',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json',
				"X-CSRFToken": token,
			},
			body: {}
		})
			.then(() => {
				const auth2 = window.gapi.auth2.getAuthInstance()
				if (auth2 != null) { auth2.signOut().then(auth2.disconnect()) }
				this.props.history.push(`/`);
				window.location.reload();
			})
	}
	renderSignInField = () => {
		const { messages } = this.props
		return (
			<NavButton id={'ga_start'} isStart='true'  onClick={() => {
				window.innerWidth > 1080 && this.props.dispatch({ type: 'toggleUserField', condition: 'signIn' })
				window.innerWidth <= 1080 && this.props.history.push('/UserMobile')
			}}>
				{messages.nav_login}
			</NavButton>
		)
	}
	renderUserField = () => {
		const { messages, router: { pathname }} = this.props
		const { state: { userListIsActive }, userListToggle, signOut, } = this
		return (
			<React.Fragment>
				<Mask isActive={userListIsActive} onClick={userListToggle} />
				<NavButton onClick={userListToggle} mobile={window.innerWidth < 480}>{messages.member_account}</NavButton>
				<ListWrap isActive={userListIsActive}>
					<StyleLink to={`/UserInfo`}>
						<ListContent onClick={userListToggle} isFocused={pathname === `/UserInfo`} isActive={userListIsActive}>
							{messages.member_user}
						</ListContent>
					</StyleLink>
					<SignOut onClick={() => signOut()}>{messages.member_signout}</SignOut>
				</ListWrap>
			</React.Fragment>
		)
	}
	renderLanguageField = () => {
		const { messages } = this.props
		const { state: { languageListIsActive }, languageListToggle, } = this
		return (
			<React.Fragment>
				<Mask isActive={languageListIsActive} onClick={languageListToggle} />
				<NavButton onClick={languageListToggle} mobile={window.innerWidth < 480}>{messages.language}</NavButton>
				<ListWrap isActive={languageListIsActive}>
					<ListContent onClick={() => { this.props.dispatch({ type: 'onChangeLanguage', language: 'zh' }); languageListToggle() }} isActive={languageListIsActive}>
						{messages.language_zh}
					</ListContent>
					<ListContent onClick={() => { this.props.dispatch({ type: 'onChangeLanguage', language: 'en' }); languageListToggle()}} isActive={languageListIsActive}>
						{messages.language_en}
					</ListContent>
					<ListContent onClick={() => { this.props.dispatch({ type: 'onChangeLanguage', language: 'es' }); languageListToggle() }} isActive={languageListIsActive}>
						{messages.language_es}
					</ListContent>
				</ListWrap>
			</React.Fragment>
		)
	}
	renderHamburgerList = ({ name, url }, pathname) => {
		return (
			<StyleLink to={url}>
				<HamburgerContent onClick={this.hamburgerToggle} isFocused={pathname === url} isActive={this.hamburgerIsActive}>
					{name}
				</HamburgerContent>
			</StyleLink>
		)
	}
	renderHamburger = () => {
		const { messages, location: { pathname } } = this.props
		const { state: { hamburgerIsActive }, hamburgerToggle, renderHamburgerList,} = this
		const HamburgerList = [
			{ name: messages.slide_ranking, url: '/' },
			{ name: messages.slide_search, url: '/InfoList' },
			{ name: messages.slide_project_management, url: '/Proposal' },
			{ name: messages.slide_lottery, url: '/Lottery' },
			{ name: messages.nav_service, url: '/Pricing' },
			{ name: messages.nav_contact, url: '/Contact' },
		]
		return (
			<React.Fragment>
				<Mask isActive={hamburgerIsActive} onClick={hamburgerToggle} />
				<HamburgerIconWrap onClick={hamburgerToggle}>
					<HamburgerIcon size='20' color='#de0606' />
				</HamburgerIconWrap>
				<HamburgerWrap isActive={hamburgerIsActive}>
					{HamburgerList.map(list => renderHamburgerList(list, pathname))}
				</HamburgerWrap>
			</React.Fragment>
		)
	}
	render() {
		const { renderSignInField, renderUserField, renderLanguageField, renderHamburger } = this
		const { user: { auth }, messages, router: { pathname } } = this.props
		return (
			<NavWrap>
				<InteRedIconWrap onClick={() => this.props.history.push('/')} >
					<InteRedIcon mobile={window.innerWidth < 480}/>
				</InteRedIconWrap>
				<NavContentWrap>
					<StyleLink to={`/Pricing`}>
						<NavContent isFocused={pathname === `/Pricing`}>{messages.nav_service}</NavContent>
					</StyleLink>
					<StyleLink to={`/Contact`}>
						<NavContent isFocused={pathname === `/Contact`}>{messages.nav_contact}</NavContent>
					</StyleLink>
					{renderLanguageField()}
					{auth === 'notSignIn' && renderSignInField()}
					{auth === 'isSignIn' && renderUserField()}
					{renderHamburger()}
				</NavContentWrap>
				{/* <Mask/> */}
			</NavWrap>
		);
	}
};
const mapStateToProps = state => {
	return {
		user: state.User,
		messages: state.Messages
	}
}
export default withRouter(connect(mapStateToProps)(Nav));
const Mask = styled.div`
    position: fixed;
    display: ${props => props.isActive ? '' : 'none'};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
`
const InteRedIconWrap = styled.div`
	display: flex;
`
const NavWrap = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    top: 0;
    left: 0;
    padding: 0 40px;
    background-color: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    z-index: 10000;
    @media (max-width: 900px){
      padding: 0 20px;
    }
`;
const NavContentWrap = styled.div`
    display: flex;
    align-items: center;
`;
const NavContent = styled.div`
    margin-right: 32px;
    font-size: 14px;
    font-weight: 300;
    color: ${props => props.isFocused ? '#de0606' : '#999999'};
    @media (max-width: 1170px){
      display: none;
    }
`;
const NavButton = styled.div`
    margin-right: ${({ mobile }) => mobile ? '16px' : '32px'};
    padding: ${({ mobile }) => mobile ? '2px 8px' : '2px 15px'};
    font-size: 14px;
    font-weight: 500;
    color: ${props=>props.isStart ? "#de0606 ":"#999999"};
    box-shadow: 1px 2px 2px 1px rgba(226, 226, 226, 0.5);
    border: solid 0.5px #999999;
	cursor: pointer;
`



const ListWrap = styled.div`
    overflow: hidden;
    position: fixed;
    flex-direction: column;
    width: 240px;
    top: 72px;
    left: auto;
    right: 0;
    z-index: 10000;
    padding-top: 0;
    background-color: #fafafa;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    transition: transform .4s;
    transform: ${props => props.isActive ? "scaleY(1)" : "scaleY(0)"};
    transform-origin: top center;
`
const ListContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    color: ${props => props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999'};
    font-size: 14px;
    font-weight: 300;
    transition: color .2s;
    cursor: pointer;
    :hover {
        color: ${props => props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999'};
        font-weight: 500;
        background-color: hsl(0, 0%, 92%);
    }
`
const SignOut = styled(ListContent)`
    border-top: .5px solid #e6e6e6;
`
const HamburgerIconWrap = styled.div`
    display: none;
    @media (max-width: 1170px){
      display: flex;
      align-items: center;
    }
    cursor: pointer;
`;
const HamburgerWrap = styled.div`
    overflow: hidden;
    position: fixed;
    display: none;
    flex-direction: column;
    width: 240px;
    top: 72px;
    left: auto;
    right: 0;
    z-index: 10000;
    padding-top: 0;
    background-color: #fafafa;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.05);
    transition: transform .4s;
    transform: ${props => props.isActive ? "scaleY(1)" : "scaleY(0)"};
    transform-origin: top center;
    @media (max-width: 1170px){
        display: flex;
    }
`
const HamburgerContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 17px;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    color: ${props => props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999'};
    font-size: 14px;
    font-weight: 300;
    transition: color .2s;
    cursor: pointer;
    :hover {
        color: ${props => props.isActive === false ? 'transparent' : props.isFocused ? '#de0606' : '#999999'};
        font-weight: 500;
        background-color: hsl(0, 0%, 92%);
    }
`;