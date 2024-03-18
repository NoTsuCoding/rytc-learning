import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)

    return (
        <Container sx={{ height: '100%', justifyContent: 'center', display: 'flex' }}>
            <Box width="50%" height="100%" display="flex" flexDirection={'column'} alignItems="center" justifyContent="center" gap={2}>
                <Typography variant='h2' fontWeight="bold">Oops!</Typography>
                <Typography variant='h5' fontWeight="bold">{error.status} - {error.statusText} </Typography>
                <Box display='flex' justifyContent='center' flexDirection='column' alignItems="center">
                    <Typography align='center' variant='body1' sx={{ maxWidth: '50ch' }}>The page you are looking for might be removed. if you think something is broken, report a problem</Typography>
                </Box>
                <Box sx={{ display: 'flex' , flexDirection: { xs: 'column', md: "row" }, gap: 2}}>
                    <Button component={RouterLink} to="/" variant='contained'>Go Home</Button>
                    <Button component={RouterLink} to="/" variant='outlined'>Report</Button>
                </Box>
            </Box>
        </Container>
    )
}
