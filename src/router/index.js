import About from "../pages/About/About";
import LogIn from "../pages/LogIn/LogIn";
import Home from "../pages/Home/Home";

export const PublicRoute = [
    { id:0,  path: '/', element: About, exact: true },
    { id:1,  path: '/signin', element: LogIn, exact: true }
]

export const PrivateRoute = [
    { id:0,  path: '/home', element: Home, exact: true }
]