// pages/_app.js
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>Sueldo hoy Argentina</title>
                    <meta name="description" content="Conocé el sueldo real que tiene que cobrar!" />
                </Head>
                <Component {...pageProps} />
            </Container>
        )
    }
}

export default App