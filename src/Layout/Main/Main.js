import React from 'react';
import Header from '../../Components/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;