import React from 'react'
import { connect } from 'react-redux'
import fetch from 'isomorphic-unfetch';
import { withNamespaces } from '../i18n'

const { REACT_APP_URI = '/' } = process.env
class Test extends React.Component {
    static async getInitialProps({ store, isServer }) {
        // await fetch(`http://ec2-13-230-4-251.ap-northeast-1.compute.amazonaws.com:8000/accounts/loginOrNot/`, { credentials: 'include' })
        //         .then(res => console.log(res.status))
        // console.log(store)
        return { isServer, namespacesRequired: ['common'], }
    }
    componentDidMount() {
    }
    render() {
        const { t } = this.props
        return (
            <div>
                {t('avgEngageRate')}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        messages: state.Messages
    }
}
export default connect(mapStateToProps)(withNamespaces('common')(Test));
