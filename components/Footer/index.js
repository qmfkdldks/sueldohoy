import React from "react"
import { Box, ResponsiveContext, Text } from "grommet"
import { Grommet } from 'grommet-icons'
// import { Logo, SocialMedia } from "../index";
// import { FooterContent } from "./FooterContent";

const Footer = () => (
    <ResponsiveContext.Consumer>
        {size => (
            <Box
                direction="row"
                justify="between"
                // border={{ side: "top", color: "light-4" }}
                pad={{ top: "xlarge" }}
            >
                <Box gap="large" align="start">
                    <Box
                        gap="small"
                        direction="row-responsive"
                        align="center"
                    >
                        <Grommet color="brand" />
                        <Text weight="bold" size="large">
                            Sueldo Hoy!
                        </Text>
                    </Box>
                </Box>
                <Box align="end">
                    <Text> all rights reserved © 2019 </Text>
                </Box>
            </Box>
        )}
    </ResponsiveContext.Consumer>
)

export default Footer
