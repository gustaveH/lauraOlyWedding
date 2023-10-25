import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/hero'
import Scrollbar from '../components/scrollbar'
import CoupleSection from '../components/CoupleSection/CoupleSection';
import StorySection from '../components/StorySection/StorySection';
import RSVP from '../components/RSVP';
import EventSection from '../components/EventSection/EventSection';
import Footer from '../components/footer/Footer';



const HomePage = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header-s1'} />
            <Hero />
            {/* <CoupleSection />
            <StorySection /> */}
            <RSVP />
            {/* <EventSection />
            <Footer />
            <Scrollbar /> */}
        </Fragment>
    )
};

export default HomePage;