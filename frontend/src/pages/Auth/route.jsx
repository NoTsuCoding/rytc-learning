import AuthLayout from "./layout";
import SignIn from "./pages/SignIn";

const AuthenRoute = {
    path: "/auth",
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <SignIn />
        }
    ]
}

export default AuthenRoute