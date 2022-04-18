import React from 'react';
import Banner from '../Banner/Banner';
import BannerOne from '../Banner/BannerOne';
import Services from '../Services/Services';
import TrainerIntro from '../TrainerIntro/TrainerIntro';


const Home = () => {
    return (
        <div>
            {/* <Banner/> */}
            <BannerOne/>
            <TrainerIntro/>
            <Services/>
        </div>
    );
};

export default Home;