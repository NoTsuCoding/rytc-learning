import RYTCAppBar from '../../components/AppBar/RYTCAppBar';
import Box from '../../components/Box/Box';
import BoxContent from '../../components/Box/BoxContent';
import BoxHead from '../../components/Box/BoxHeader';
import BoxFooter from '../../components/Box/BoxFooter';
import Footer from '../../components/footer/Footer';

import { Outlet } from 'react-router-dom';

function PublicLayout() {
    return (
        <>
            <Box>
                <BoxHead>
                    <RYTCAppBar />
                </BoxHead>
                <BoxContent>
                    <Outlet />
                </BoxContent>
            </Box>
            <Footer></Footer>
        </>
    )
}

export default PublicLayout