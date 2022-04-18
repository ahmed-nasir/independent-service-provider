import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import TrainerIntro from '../TrainerIntro/TrainerIntro';


const Home = () => {
    return (
        <div>
            <Banner/>
            <TrainerIntro/>
            <Services/>
        </div>
    );
};

export default Home;