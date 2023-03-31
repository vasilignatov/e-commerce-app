import { Link } from 'react-router-dom';

const AllTitleBox = ({ title }) => {
    return (
        <div className="all-title-box">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <h2>{title}</h2>

                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li className="breadcrumb-item active">{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTitleBox;