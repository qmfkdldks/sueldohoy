import React from 'react'
import { Box, Heading } from 'grommet'
import { Fade } from 'react-reveal'

const Row = (props) => {
    const { icon, index, could, need } = props
    return (
        <Box width="100%" direction="row" gap="small" justify="evenly">
            <Fade bottom cascade><Heading level="3">{icon} {index}</Heading></Fade>
            <Heading level="3"><Fade bottom cascade>{could}</Fade></Heading>
            <Heading level="3"><Fade bottom cascade>{need}</Fade></Heading>
        </Box>
    )
}

class SalaryResult extends React.Component {
    render() {
        const { data } = this.props
        const rows = data.map((object, index) => <Row key={index} {...object} />)

        return (
            <React.Fragment>
                {rows}
            </React.Fragment >
        )
    }
}

export default SalaryResult