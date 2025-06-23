import React , {useContext, useEffect} from 'react';
import { AppContext } from 'app/context';
import { Button } from 'antd';

const VVNavbar = (): React.ReactElement => {
    const { OFFICIAL_VV_LOGO } = useContext(AppContext)
    //const OFFICIAL_VV_LOGO = process.env.REACT_APP_OFFICIAL_VV_LOGO;
    const pages = [
        {
            name: 'Discover'
        },
        {
            name: 'Accomodations'
        },
        {
            name: 'Dining'
        },
        {
            name: 'Special Offers'
        },
    ]
    return (
        <nav className='vv-navbar'>
            <div className="vv-logo-container">
                <img src={OFFICIAL_VV_LOGO} className='vv-logo' />
            </div>
            <ul className="vv-nav-links">
               {
                    pages.map((page:any, index:number) => (
                        <li className="vv-nav-li"><a href="#" key={index}> {page.name} </a></li>
                    ))
               }
               <li><Button>RESERVATIONS</Button></li>
            </ul>
        </nav>
    )
}

export default VVNavbar;