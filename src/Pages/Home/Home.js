import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Collections from './Collections/Collections';
import Reviews from './Reviews/Reviews';
import Team from './Team/Team';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Collections />
            <Reviews />
            <Team />
            <Footer />
        </div>
    );
};

export default Home;