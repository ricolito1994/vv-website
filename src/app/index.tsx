import React , {useContext, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    Route, 
    Routes, 
    /*useLocation, useNavigate,*/ 
    Navigate 
} from 'react-router-dom';

/* layouts - this will render the pages depending on the route */
import MainLayout from './components/Layouts/MainLayout';

/* import your pages here */
import MainPage from './pages/MainPage';

import AppContext from 'app/context';

const App = () => {
    const APP_NAME             = process.env.REACT_APP_NAME;
    const WEBSITE_TITLE        = process.env.REACT_APP_WEBSITE_TITLE;
    const META_DESCRIPTION     = process.env.REACT_APP_META_DESCRIPTION;
    const META_KEYWORDS        = process.env.REACT_APP_META_KEYWORDS;
    const META_AUTHOR          = process.env.REACT_APP_META_AUTHOR;

    useEffect(() => {
       // put something useful here
    }, [])

    /*
        As of now we dont need conditional rendering because we don't have authentication
        when accessing the vista villa site
    */

    return (
        <div className='App'>
            <Helmet>
                <title>{WEBSITE_TITLE}</title>
                <link rel="icon" href="https://vistavilladsb.com/favicon.ico" />
                <meta name="description" content={META_DESCRIPTION} />
                <meta name="keywords" content={META_KEYWORDS} />
                <meta name="author" content={META_AUTHOR} />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Helmet>
            <Routes>
                {/*<Route element={<AccomodationLayout />}>
                    <Route path="/accomodation" element={
                        <AppContext>
                            <Accomodation />
                        </AppContext>
                    } />
                </Route>*/}
                <Route element={<MainLayout />}>
                    <Route path="" element={
                        <AppContext>
                            <MainPage />
                        </AppContext>
                    } />
                </Route>
            </Routes>
        </div>
    )
}

export default App;