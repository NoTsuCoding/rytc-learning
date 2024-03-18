import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

import { ThemeProvider } from "@mui/material"
import CustomeTheme from "./components/theme/customeTheme"

import './assets/css/index.css'

import AllRoutes from './utils/route/'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={CustomeTheme}>
            <CookiesProvider>
                <RouterProvider router={AllRoutes} />
            </CookiesProvider>
        </ThemeProvider>
    </React.StrictMode>,
)
