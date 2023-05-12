import {
    createBrowserRouter,
} from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import RegistrationLayout from "../Layout/RegistrationLayout";
import Home from "../pages/Home/Home/Home";
import OrderConfirm from "../pages/OrderConfirm/OrderConfirm";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'service-details/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: 'order-confirm/:id',
                element: <OrderConfirm />,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
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