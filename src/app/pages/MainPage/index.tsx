import React , {useContext, useEffect} from 'react';
import MainSection from 'app/components/MainPageSections/MainSection';
import Accomodation from 'app/components/MainPageSections/Accomodation';
const MainPage = ():React.ReactElement => {
    return (<>
        <MainSection />
        <Accomodation />
    </>)
}

export default MainPage;