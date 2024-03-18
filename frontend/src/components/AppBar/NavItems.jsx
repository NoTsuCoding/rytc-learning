import React from 'react';

import { Box, Button, IconButton, Link, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink, BrowserRouter } from 'react-router-dom'

export default function NavItems({role = null, forMenu}) {

    let items = []
    if (!role) {
        items = [
            {name: "Home", link: "/"},
            {name: "Contract", link: "/contract"},
        ]
    } 

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    if (forMenu) {
        return (
            <>
                {/* Menu Nav items */}
                <Box sx={{ flexGrow: 1, display: {xs: 'flex', md: 'none'} }}>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={handleOpenNavMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        {items.map((item) => (
                            <MenuItem key={item.name}>
                                <Typography
                                    component={RouterLink}
                                    to={item.link}
                                    textAlign="center"
                                    sx={{textDecoration: 'none', color: 'inherit'}}
                                >
                                    {item.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
            </>
        )
    } else {
        return (
            <>
                {/* NavItem */}
                <Box sx={{flexGrow: 1, display:{ xs: 'none', md: 'flex' }, ml: 5}}>
                    {items.map((item) => (
                        <Button
                            component={RouterLink}
                            to={item.link}
                            key={item.name}
                            sx={
                                {
                                    my: 3,
                                    color: 'white',
                                    display: 'block',
                                }
                            }
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </>
        )
    }
}