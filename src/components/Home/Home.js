import React from 'react';
import NavBar from '../NavBar/NavBar';
import AvailableRent from './AvailableRent';
import Footer from './Footer';
import Header from './Header';
import "./Home.css"
import Service from './Service';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <AvailableRent></AvailableRent>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;