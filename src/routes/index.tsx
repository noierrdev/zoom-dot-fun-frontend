import React ,{FC} from 'react'
import { useRoutes } from "react-router-dom"
import DefaultLayout from '../layouts/default';

const IndexPage=React.lazy(()=> import("../pages/home"));


const AppRoutes:FC<any>=(props)=>{
    const routes=[
        {
            path:"/",
            element:<DefaultLayout {...props} />,
            children:[
                {
                    path:"",
                    element:<IndexPage {...props} />
                }
            ]
        },
    ]
    return useRoutes(routes);
}
export default AppRoutes;