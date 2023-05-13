import {
    createBrowserRouter,
} from "react-router-dom";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import RegistrationLayout from "../Layout/RegistrationLayout";
import Home from "../pages/Home/Home/Home";
import OrderConfirm from "../pages/OrderConfirm/OrderConfirm";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import Registration from "../pages/Registration/Registration";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


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
                element: <PrivateRoute><OrderConfirm /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: 'orders-history',
                element: <PrivateRoute><OrderHistory /></PrivateRoute>
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