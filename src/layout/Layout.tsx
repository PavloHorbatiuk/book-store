import React from "react";
import { Outlet } from "react-router-dom";
import "./layout.css";

export const Layout = () => {
    return (
        <main className='layout'>
            <Outlet></Outlet>
        </main>
    );
};

export default Layout;
