import { Avatar, MenuItem, IconButton, Menu, Tooltip, Typography, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { useCookies } from "react-cookie";
import { getProfile } from "../../services/auth";

export default function NavAuth() {

    

    const [ isAuth, setAuth ] = React.useState(false)

    const [ cookies, setCookies ] = useCookies(['refreshToken', 'accessToken'])
    // console.log(cookies)
    React.useEffect(() => {
        getProfile(cookies['refreshToken'])
            .then((resullt) => {
                console.log(resullt)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const changeAuth = () => {
        setAuth(false)
    }

    const items = [
        {name: "Profile", link: "/profile", onclick: null},
    ]

    // if (isAuth) {
        return (
            <>
                {cookies.refreshToken 
                    ? (
                        <>
                            <Tooltip title="Open Setting">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>TK</Avatar>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {items.map((item) => (
                                    <MenuItem key={item.name} onClick={item.onclick}>
                                        <Typography component="a" href={item.link} textAlign="center" sx={{color: 'inherit', textDecoration: 'none'}}>{item.name}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem key="logout" onClick={changeAuth}>
                                    <Typography textAlign="center" sx={{color: 'inherit', textDecoration: 'none'}}>logout</Typography>
                                </MenuItem>
                            </Menu>
                        </>
                    )
                    : (
                        <>
                            <Button color="secondary" href="/auth/login" variant="contained">Log In</Button>
                        </>
                    )
                }
            </>
        )
}