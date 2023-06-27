import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import Card from './card/Card';
import About from './About/About';
const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Card></Card>
           <About></About>
        </div>
    );
};

export default Home;