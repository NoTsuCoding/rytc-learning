import { createBrowserRouter } from 'react-router-dom'
import PublicRoute from '../../pages/public/route'
import ErrorRoute from '../../pages/Error/route'
import AuthenRoute from '../../pages/Auth/route'


const AllRoutes = createBrowserRouter([
    ErrorRoute,
    PublicRoute,
    AuthenRoute
])

export default AllRoutes