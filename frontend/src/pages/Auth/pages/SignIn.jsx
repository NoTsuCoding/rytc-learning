import { Box, Button, Container, Grid, Snackbar, TextField, Typography } from '@mui/material'
import { Link as RouterLink, redirect, useNavigate } from 'react-router-dom'
import React from 'react'
import { login }  from '../services/index.js'
import { useCookies } from 'react-cookie'
import { ErrorCode } from '../../../utils/endpoint/index.js'
import AlertSnacbar from '../../../components/Alert/AlertSnacbar.jsx'

function SignIn() {

    // ! Alert
    const [ alertState, setAlert ] = React.useState({
        open: false,
        message: "",
        status: "success"
    })

    const { open, message, status } = alertState

    const alertCloseHandle = () => {
        setAlert({ ...alertState, open: false })
    }

    // ! Cookies
    const [cookies, setCookies] = useCookies(['refreshToken'], ['accessToken'])

    // ! Form
    const [inputs, setInputs] = React.useState({})
    const navigate = useNavigate()

    const inputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}))
    }

    const loginSubmit = async (event) => {
        event.preventDefault()

        const response = await login(inputs['username'], inputs['password'])
        
        if (response.status == 500) return setAlert({ ...alertState, open: true, status: "error", message: ErrorCode[response.data.err_msg] })

        const refreshToken = response.data.refreshToken
        const accessToken = response.headers['authorization']

        setAlert({ ...alertState, open: true, status: "success", message: "Login Successful" })

        setCookies('refreshToken', refreshToken, { path: '/' })
        setCookies('accessToken', accessToken, { path: '/' })

        return navigate('/courses')
    }

    return (
        
        <Container maxWidth='xl' sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100%' }}>
            <AlertSnacbar
                open={ open }
                onClose={ alertCloseHandle }
                status={ status }
                message={ message }
            />
            <Box width="100%" height="auto" sx={{ backgroundColor: "#FFFF", p: 5, borderRadius: "15px", boxShadow: "1" }}>
                <Grid container height="100%" alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant='h4' fontWeight="medium">Login</Typography>
                        <Box display="flex" flexDirection="row" sx={{ flexWrap: "nowrap" }}>
                            <Typography sx={{ fontSize: { sx: "subtitle1.fontSize" , md: 'h6.fontSize' }}} mr={1}>มีปัญหาในการเข้าระบบ?</Typography>
                            <Typography sx={{ fontSize: { sx: "subtitle1.fontSize" , md: 'h6.fontSize' }}} component={RouterLink} to="/contract">ติดต่อ</Typography>
                        </Box>
                        {/* Form */}
                        <Box
                            display="flex"
                            flexDirection="column"
                            gap={3}
                            component="form"
                            onSubmit={loginSubmit}
                            sx={{ my: 2 }}
                        >
                            <TextField
                                label="Username"
                                variant='outlined'
                                name="username"
                                onChange={inputChange}
                                fullWidth
                            />
                            <TextField
                                label="Password"
                                variant='outlined'
                                name="password"
                                onChange={inputChange}
                                fullWidth
                                type='password'
                            />
                            <Typography variant='subtitle1' component={RouterLink} to="/contract" fontWeight="regular">ลืมรหัสผ่าน</Typography>
                            <Button type='submit' variant='contained' fullWidth>Login</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Box height="100%" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', md: "flex"} }}>
                            <img srcSet='/website/learning.svg' width="750px" />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default SignIn