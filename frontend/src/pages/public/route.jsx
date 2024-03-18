import Contract from "./pages/Contract";
import Homepage from "./pages/Homepage";
import PublicLayout from "./layout";

const PublicRoute = {
    path: "/",
    element: <PublicLayout />,
    children: [
        {
            path: '/',
            element: <Homepage />
        },
        {
            path: 'contract',
            element: <Contract />
        }
    ]
}

export default PublicRoute