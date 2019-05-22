import React from 'react'
import Head from 'next/head'
import { Grommet, ResponsiveContext } from 'grommet';
import SalaryForm from '../components/SalaryForm'
import Footer from '../components/Footer'

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
                    <title>Sueldo Hoy</title>
                    <meta name="description" content="Conocé el salario que tiene que cobrar." />
                    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
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