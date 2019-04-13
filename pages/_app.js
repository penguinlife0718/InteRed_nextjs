import App, { Container } from 'next/app'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from '../store';
import locale from '../static/languages/languages'
import { appWithTranslation } from '../i18n'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}
        }
    }
    render() {
        const { Component, pageProps, store } = this.props
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </Container>
        )
    }
}
export default withRedux(store)(appWithTranslation(MyApp))
