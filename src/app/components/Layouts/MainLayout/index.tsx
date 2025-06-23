import React from "react";
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
//components
//import Sidenav from "app/components/Sidenav";
import VVNavbar from "app/components/VVNavbar";

const MainLayout = (): React.ReactElement => {
    return (
        <>
            <div className="container">
                <VVNavbar />
                <Outlet />
            </div>
        </>
    );
}

export default MainLayout;