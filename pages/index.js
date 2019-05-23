import React from 'react'
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
                <Grommet theme={theme}>
                    <SalaryForm />
                    <Footer />
                </Grommet>
            </React.Fragment>
        )
    }
}

export default Index