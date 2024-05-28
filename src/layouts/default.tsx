import { FC } from "react";
import { Outlet } from "react-router-dom";
// import Header from "../components/layouts/header";
// import Footer from "../components/layouts/footer";
const DefaultLayout:FC=props=>{
    return (
        <>
        <div>
            {/* <Header/> */}
        </div>
        <Outlet {...props} />
        <div>
            {/* <Footer/> */}
        </div>
        </>
    )
}
export default DefaultLayout;