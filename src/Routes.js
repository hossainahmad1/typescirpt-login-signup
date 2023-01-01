import { createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Main from './Layout/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Login></Login>,
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>,
            },
        ],
    },
]);
export default router;