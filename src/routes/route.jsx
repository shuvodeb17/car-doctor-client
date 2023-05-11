import {
    createBrowserRouter,
} from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import RegistrationLayout from "../Layout/RegistrationLayout";
import Home from "../pages/Home/Home/Home";
import Registration from "../pages/Registration/Registration";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
    {
        path: 'login',
        element: <LoginLayout />
    },
    {
        path: 'registration',
        element: <RegistrationLayout />
    }
]);

export default router;