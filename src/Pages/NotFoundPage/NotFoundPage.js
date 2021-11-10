import React from 'react';
import notFound from '../../Images/404-Page.gif'
const NotFoundPage = () => {
    return (
        <div>
            <img className='img-fluid w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFoundPage;