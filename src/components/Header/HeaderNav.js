import { Link } from 'react-router-dom';

const HeaderNav = () => {
    return (
        <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand" to="/">
                <img src="https://ik.imagekit.io/8brpz6ecl/e-commerce-react/logo.png?updatedAt=1680077299158" className="logo" alt="Site Logo" />
            </Link>
        </div>
    )
}

export default HeaderNav;