import React from "react"
import { Box, ResponsiveContext, Text, Image } from "grommet"
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
                        <Box height="40px" width="40px">
                            <Image
                                fit="cover"
                                src="/static/logo2.png"
                                alt="SueldoHoy Logo"
                            />
                        </Box>
                        <Text weight="bold" size="large">
                            SueldoHoy!
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
