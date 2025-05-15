import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Shared/Navbar';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div className=' bg-[#c3921e10] overflow-x-hidden'>
            <div className='   min-h-screen flex flex-col  '>
                <div className=' max-w-screen-2xl md:px-5 mx-auto'>
                    <Navbar />
                </div>
                <div className={`pt-8 md:pt-20 max-w-screen-2xl 2xl:w-[1500px]
                     grow  md:px-5 2xl:mx-auto flex flex-col`}>
                    <Outlet />
                </div>
                <div className='md:min-w-screen'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;