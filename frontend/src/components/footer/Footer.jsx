import React from 'react'

import { Box, Grid, Stack, Typography } from '@mui/material'

import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    const contracts = [
        {icon: <CallIcon />, name: "tel",value: "+66 645272451"},
        {icon: <EmailIcon />, name: "email",value: "notsu.coding.station@gmail.com"},
        {icon: <FacebookIcon />, name: "address", value: "Patsakorn Thiankhao"},
    ]

    const resources = [
        {name: "Image", ref: "StorySet", link: "https://storyset.com/online"}
    ]

    return (
        <>
            <Box sx={{ px: 5, py: 3, backgroundColor: '#282c2f', color: 'white' }}>
                <Grid container spacing={2} display="flex" justifyContent="center">
                    <Grid item xs={12} md={3}>
                        <Stack spacing={2}>
                            {contracts.map((contract) => (
                                <Box key={contract.name} display="flex" alignItems="center" gap={2}>
                                    <Box height="40px" width="40px" alignItems="center" justifyContent="center" display="flex" sx={{ borderRadius: "50%", backgroundColor: "#33373a" }}>
                                        {contract.icon}
                                    </Box>
                                    <Typography variant='body2'>{contract.value}</Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stack spacing={2}>
                            <h5>Resources</h5>
                            {resources.map((item) => (
                                <Box key={item.name} display="flex" alignItems="center" gap={1}>
                                    <Typography variant='body2' color="#949fa1">{item.name}:</Typography>
                                    <Typography variant='body2' component="a" href={item.link} target='__blank' color="#949fa1">{item.ref}</Typography>
                                </Box>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stack spacing={2}>
                            <Typography variant='h6' fontWeight="bold">HelloWorld Coding</Typography>
                            <Typography variant='body2' color="#949fa1">HelloWorld Coding is a group of IT students who have a variant skill.</Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Footer