import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Collections from './Collections/Collections';

const AllCollection = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Collections></Collections>
            <Footer></Footer>
        </div>
    );
};

export default AllCollection;