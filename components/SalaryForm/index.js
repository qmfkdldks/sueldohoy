import React from 'react'
import {
    Grid, Box, Button, Calendar, MaskedInput, Heading, Paragraph, Icons, ResponsiveContext, WorldMap
} from 'grommet';
import { Gremlin, Currency } from 'grommet-icons';

class SalaryForm extends React.Component {
    state = {
        date: new Date().toDateString(),
        value: ''
    }

    onCalculate = () => {
        const { value, date } = this.state
        console.log("Value Actual: ", value)
        console.log("Date: ", date)
    }

    onSelectDate = date => this.setState({ date })

    onValueChange = event => this.setState({ value: event.target.value })



    render() {
        const { value } = this.state
        return (
            <React.Fragment>
                <Box direction="row-responsive" pad='large'>

                    <Box pad="medium" gap="small">
                        <Heading>Ponéte el salario que cobraba</Heading>
                        <Paragraph>Por el tema de inflación, nos necesitams una calculadora para el valor real</Paragraph>
                        <Box gap="small">
                            <Box direction="row" gap="small" align="center">
                                <Currency />
                                <MaskedInput
                                    mask={[
                                        {
                                            length: 10,
                                            regexp: /^[0-9]{1,10}$/,
                                            placeholder: '10000',
                                        }
                                    ]}
                                    placeholder="$ Sueldo anterior"
                                    value={value}
                                    onChange={this.onValueChange}
                                />
                            </Box>
                            <Calendar alignSelf="center" date={this.state.date} onSelect={this.onSelectDate} />
                        </Box>
                        <Box align="end">
                            <Button icon={<Gremlin />} label="Calcular" onClick={this.onCalculate} />
                        </Box>
                    </Box>

                    <Box width="100%" round={true} background='brand'>
                        <Box pad="medium">
                            <Heading>
                                La inflación en 2018 fue del 47,6%, la cifra más alta en los últimos 27 años.
                            </Heading>
                            <WorldMap />
                        </Box>
                    </Box>

                </Box>
            </React.Fragment >
        )
    }
}

export default SalaryForm