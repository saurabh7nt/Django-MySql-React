import { createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import Home from "./Components/Home";
import Add_Employee from "./Components/Add_Employee";
import Show_Employee from "./Components/Show_Employee";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        
        children: [
            {
                path: 'home',
                element: <Home/>  
            },
            {
                path: 'employee/add',
                element: <Add_Employee/>
            },
            {
                path: 'employee/show',
                element: <Show_Employee/> 
            }
        ]
    }
])

export default router;