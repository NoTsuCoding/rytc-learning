import { AppBar, Box, Container, Toolbar } from "@mui/material"

import Brand from './Brand';
import NavItems from './NavItems';
import NavAuth from "./NavAuth";

export default function RYTCAppBar() {
    

    return (
        <AppBar position="sticky" sx={{}}>
            <Container maxWidth="xl" sx={{py: 2}}>
                <Toolbar disableGutters>
                    <Brand forMobile={false} />

                    {/* NavItem */}
                    <NavItems forMenu={true} />

                    <Brand forMobile={true} />

                    {/* NavItem */}
                    <NavItems forMenu={false} />

                    {/* NavAuth */}
                    <Box sx={{flexGrow: 0}}>
                        <NavAuth />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
