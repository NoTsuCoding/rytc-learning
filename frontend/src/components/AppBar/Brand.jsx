import { Box, Typography } from '@mui/material'
import AppConfig from '../../../../config/App.json'

export default function Brand({ forMobile }) {
    const AppName = AppConfig['App Name']

    if (forMobile) {
        return (
            <>
                {/* Logo */}
                <Box sx={{display: {xs: 'flex', md: 'none'}, mr: 2}}>
                    <img src="/icon/android-chrome-192x192.png" width="75"/>
                </Box>

                {/* Brand */}
                <Typography variant="h6" sx={{display: {xs: 'flex', md: 'none', flexGrow: 1}}}>
                    {AppName}
                </Typography>
            </>
        )
    } else {
        return (
            <>
                <Box sx={{display: {xs: 'none', md: 'flex'}, mr: 2}}>
                    <img src="/icon/android-chrome-192x192.png" width="75"/>
                </Box>

                {/* Brand */}
                <Typography noWrap variant="h6" sx={{display: {xs: 'none', md: 'flex'}}}>
                    {AppName}
                </Typography>
            </>
        )
    }
}