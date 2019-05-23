import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

const SalaryResult = (props) => {
    const { currentValue } = props

    return (
        <React.Fragment>
            <Box>
                <Paragraph>{currentValue}</Paragraph>
            </Box>
        </React.Fragment>
    )
}

export default SalaryResult