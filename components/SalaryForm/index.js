import React from 'react'
import {
    Grid, Box, Button, Calendar, MaskedInput, Heading, Paragraph, Icons, ResponsiveContext, WorldMap
} from 'grommet';
import { Gremlin, Currency } from 'grommet-icons';
import fetch from 'isomorphic-unfetch'
import SalaryResult from '../SalaryResult'

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
}

class SalaryForm extends React.Component {
    state = {
        date: new Date().toDateString(),
        value: '',
        usd: {},
        idle: true
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const response = await fetch('/data')
        const json = await response.json()
        // Array data to make uniq hash
        const hash = Object.assign({}, ...json.map(s => ({ [s.d]: s.v })));
        this.setState({ usd: hash })
    }

    onCalculate = () => {
        const { value, date, usd } = this.state
        const date_obj = new Date(date)
        const date_str = `${date_obj.getFullYear}-${date_obj.get}`
        console.log("Value Actual: ", value)
        console.log("Date: ", dateToYMD(date_obj))
        console.log("Usd: ", usd)

        this.setState({ idle: false })
        console.log("found", usd[dateToYMD(date_obj)])
    }

    onSelectDate = date => this.setState({ date })

    onValueChange = event => this.setState({ value: event.target.value })

    render() {
        const { value, idle } = this.state
        const renderResult = (idle) ? (
            <Box pad="medium">
                <Heading>
                    La inflación en 2018 fue del 47,6%, la cifra más alta en los últimos 27 años.
                </Heading>
                <WorldMap />
            </Box>
        ) : (<SalaryResult currentValue={1050} />)
        return (
            <React.Fragment>
                <Box direction="row-responsive" pad='large'>

                    <Box pad="medium" gap="small">
                        <Heading>Ponéte el salario que cobraba</Heading>
                        <Paragraph>Por el tema de inflación, nos necesitams una calculadora para el valor real</Paragraph>
                        <Box gap="small" pad="medium">
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
                        {renderResult}
                    </Box>

                </Box>
            </React.Fragment >
        )
    }
}

export default SalaryForm