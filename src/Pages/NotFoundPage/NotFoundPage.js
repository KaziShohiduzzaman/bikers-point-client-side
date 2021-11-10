import React from 'react';
import notFound from '../../Images/404-Page.gif'
import Navigation from '../../Shared/Navigation/Navigation';
const NotFoundPage = () => {
    return (
        <div>
            <Navigation />
            <img className='img-fluid w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFoundPage;