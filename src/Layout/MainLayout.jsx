import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Shared/Navbar/Navbar';
import Footer from '../Component/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            {/* <h1>this is main layouut</h1>
             */}
             <div className='min-h-screen'>
                
            <Outlet></Outlet>
             </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;