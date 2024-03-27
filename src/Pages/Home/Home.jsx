import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
import About from '../../Component/Home/About/About';

const Home = () => {
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            {/* about */}
            <About></About>
        </div>
    );
};

export default Home;