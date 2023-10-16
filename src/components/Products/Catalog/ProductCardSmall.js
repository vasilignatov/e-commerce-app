import { Link } from 'react-router-dom';

const ProductCardSmall = ({ data }) => {
    // console.log(data);

    return (
        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="new">New</p>
                    </div>
                    <img
                        src={data.images[0]}
                        className="img-fluid"
                        alt="Image"
                    />
                    <div className="mask-icon">
                        <ul>
                            <li>
                                <Link
                                    to={`${data.sex}/${data.subCategory}/${data._id}`}
                                    data-toggle="tooltip"
                                    data-placement="right"
                                    title="View"
                                >
                                    <i className="fas fa-eye" />
                                </Link>
                            </li>
                            <li>
                                <a data-toggle="tooltip" data-placement="right" title="Add to Wishlist">
                                    <i className="far fa-heart" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="why-text">
                    <h4>{data.description}</h4>
                    <h5> ${data.price}</h5>
                </div>
            </div>
        </div>
    )
}

export default ProductCardSmall;