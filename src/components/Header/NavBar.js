import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const links = [
        { to: '/', text: 'Home' },
        { to: 'about', text: 'About Us' },
        { to: 'products', text: 'Products' },
        { to: 'services', text: 'Our Service' },
        { to: 'contacts', text: 'Contact Us' },
    ];

    return (
        <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav ml-auto" data-in="fadeInDown" data-out="fadeOutUp">


                {links.map((link, index) => (
                    <li className={`nav-item ${index === activeLink ? 'active' : ''}`} key={index}>
                        <Link
                            to={link.to}
                            className="nav-link"
                            onClick={() => handleLinkClick(index)}
                        >
                            {link.text}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>

    )
}

export default NavBar;