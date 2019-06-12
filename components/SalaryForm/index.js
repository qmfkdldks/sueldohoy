import React from 'react'
import { Box, Button, Form, FormField, Heading, Paragraph, WorldMap } from 'grommet'
import { Gremlin, Currency, Home } from 'grommet-icons'
import fetch from 'isomorphic-unfetch'
import SalaryResult from '../SalaryResult'
import DateMaskedInput from '../DateMaskedInput'
import PriceJson from './tprice.json'

function getD(index, data, date, value, icon = <Currency />) {
    const past_obj = data.find((record) => (record.d == date))

    if (past_obj) {
        const past_ratio = past_obj.v
        const past_available = parseFloat(value) / past_ratio

        const current_ratio = data[data.length - 1].v
        const current_necessary = (past_available * current_ratio)
        const object = { index: index, icon: icon, could: past_available.toFixed(2), need: current_necessary.toFixed(2) }
        console.log(object)
        return object
    }
    return {}
}

function calculatePrice(index, usd, date, value, icon = <Gremlin />) {
    const past_obj = usd.find((record) => (record.d == date))

    if (past_obj) {
        const past_dollar_price = past_obj.v
        const past_product_price = PriceJson[new Date(date).getFullYear()][index]
        const past_available_dollar = parseFloat(value) / past_dollar_price
        const past_available_product = past_available_dollar / past_product_price

        
        const current_product_price = PriceJson[new Date().getFullYear()][index]
        const current_necesary_dollar = past_available_product * current_product_price

        const current_ratio = usd[usd.length - 1].v
        const current_necesary_pesos = current_necesary_dollar * current_ratio
        // const current_available_product = past_available_dollar / current_product_price

        const object = { index: index, icon: icon, could: past_available_product.toFixed(2), need: current_necesary_pesos.toFixed(2) }
        console.log(object)
        return object
    }
    return {}
}

class SalaryForm extends React.Component {
    state = {
        data: [],
        date: "",
        value: "",
        usd: [],
        cer: [],
        uva: [],
        uvi: [],
        idle: true,
        fetching: true
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({ fetching: true })
        const response1 = await fetch('/usd')
        const usd = await response1.json()
        const response2 = await fetch('/cer')
        const cer = await response2.json()
        const response3 = await fetch('/uva')
        const uva = await response3.json()
        const response4 = await fetch('/uvi')
        const uvi = await response4.json()
        this.setState({ usd, cer, uva, uvi, fetching: false })
    }

    onCalculate = () => {
        const { value, date, usd, cer, uva, uvi } = this.state
        console.log(value, date)
        if ((new Date(date)) < (new Date())) {

            this.setState({ idle: false })

            const data = []
            console.log(usd)
            data.push(getD("USD", usd, date, value, <Currency />))
            data.push(getD("UVI", uvi, date, value, <Home />))
            data.push(getD("CER", cer, date, value))
            data.push(getD("UVA", uva, date, value))
            data.push(calculatePrice("Apples (1kg)", usd, date, value))
            data.push(calculatePrice("McMeal", usd, date, value))
            data.push(calculatePrice("Gasoline", usd, date, value))
            data.push(calculatePrice("Rent Apartment (1 bedroom) In City centre", usd, date, value))
            

            this.setState({ data: data })
        }

    }

    onChangeDate = event => this.setState({ date: event.target.value })

    onValueChange = event => this.setState({ value: event.target.value })

    render() {
        const { value, idle, fetching, data } = this.state

        const renderResult = (idle) ? (
            <Box pad="medium">
                <Heading>
                    La inflación Argentina en 2018 fue del 47,6%, la cifra más alta en los últimos 27 años.
                </Heading>
                <WorldMap />
            </Box>
        ) : <SalaryResult data={data} />

        return (
            <React.Fragment>
                <Box direction="row-responsive" pad='large'>

                    <Box pad="medium" gap="small" >
                        <Form onSubmit={this.onCalculate}>
                            <Heading>¿Cuánto cobraba cuando tuvo su ultimo aumento?</Heading>
                            <Paragraph>La inflación hace dificil saber cual es el porcentaje justo de actualizacion salarial que debe perseguir el empleado.</Paragraph>
                            <Box gap="small" pad="medium">
                                <Box direction="row" gap="small" align="center">
                                    <Currency />
                                    <label>
                                        <FormField
                                            label="¿Cuánto cobraste?"
                                            min={1}
                                            required={true}
                                            type="number"
                                            placeholder="$ Sueldo anterior"
                                            value={value}
                                            onChange={this.onValueChange}
                                        />
                                    </label>
                                </Box>
                                <label>
                                    <FormField label="¿Cúando cobraste?">
                                        <DateMaskedInput value={this.state.date} onChange={this.onChangeDate} />
                                    </FormField>
                                </label>
                                {/* s<Calendar size="medium" alignSelf="center" date={this.state.date} /> */}
                            </Box>
                            <Box align="end">
                                <Button type="submit" disabled={fetching} icon={<Gremlin />} label="Calcular" />
                            </Box>
                        </Form>
                    </Box>

                    <Box width="100%" round={true} background='brand' align="center" justify="center">
                        {renderResult}
                    </Box>

                </Box>
            </React.Fragment >
        )
    }
}

export default SalaryForm