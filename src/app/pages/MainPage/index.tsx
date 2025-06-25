import React , {useContext, useEffect} from 'react';
import MainSection from 'app/components/MainPageSections/MainSection';
import Accommodation from 'app/components/MainPageSections/AccommodationSection';
import About from 'app/components/MainPageSections/AboutSection';
import Footer from 'app/components/MainPageSections/FooterSection';


const MainPage = ():React.ReactElement => {

    return (<>
        <MainSection />
        <About />
        <Accommodation />
        <Footer />
    </>)
}

export default MainPage;