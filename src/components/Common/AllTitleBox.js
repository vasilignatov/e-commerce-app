import { Link } from 'react-router-dom';

const AllTitleBox = ({ title }) => {
    return (
        <div class="all-title-box">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">

                        <h2>{title}</h2>

                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <Link to="/">Home</Link>
                            </li>
                            
                            <li class="breadcrumb-item active">{title}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllTitleBox;