import './Header.css';
import Auth from '../Auth/Auth.js';
import NavBar from './NavBar';
import HeaderNav from './HeaderNav';
import AtributeNav from './AtributeNav';

import { useState } from 'react';

const Header = () => {

    const [isVisible, setIsVisible] = useState(false);

    function setIsVisibleHandler() {
        setIsVisible(isVisible => !isVisible);
    }

    return (
        <> 
            {
                isVisible
                    ? <Auth setIsVisibleHandler={setIsVisibleHandler} />
                    : ''
            }

            <header className="main-header">
                {/* <!-- Start Navigation --> */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-default bootsnav">
                    <div className="container">

                        <HeaderNav />

                        <NavBar />

                        <AtributeNav setIsVisible={setIsVisible} />

                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;