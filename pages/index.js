import React from 'react'
import { Grommet, ResponsiveContext } from 'grommet';
import SalaryForm from '../components/SalaryForm'
import Footer from '../components/Footer'
import Head from 'next/head'

const theme = {
    global: {
        font: {
            family: '"Varela Round", sans-serif',
        },
    },
};

class Index extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>SueldoHoy Argentina 2019</title>
                    <meta name="description" content="Conozca el sueldo que debería cobrar en Argentina" />
                </Head>
                <Grommet theme={theme}>
                    <SalaryForm />
                    <Footer />
                </Grommet>
            </React.Fragment>
        )
    }
}

export default Index