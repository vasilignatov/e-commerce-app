const SideBar = () => {
    return (
        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
            <div className="product-categori">
                <div className="search-product">
                    <form action="#">
                        <input
                            className="form-control"
                            placeholder="Search here..."
                            type="text"
                        />
                        <button type="submit">
                            <i className="fa fa-search" />
                        </button>
                    </form>
                </div>
                <div className="filter-sidebar-left">
                    <div className="title-left">
                        <h3>Categories</h3>
                    </div>
                    <div
                        className="list-group list-group-collapse list-group-sm list-group-tree"
                        id="list-group-men"
                        data-children=".sub-men"
                    >
                        <div className="list-group-collapse sub-men">
                            <a
                                className="list-group-item list-group-item-action"
                                href="#sub-men1"
                                data-toggle="collapse"
                                aria-expanded="true"
                                aria-controls="sub-men1"
                            >
                                Clothing <small className="text-muted">(100)</small>
                            </a>
                            <div
                                className="collapse show"
                                id="sub-men1"
                                data-parent="#list-group-men"
                            >
                                <div className="list-group">
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action active"
                                    >
                                        T-Shirts <small className="text-muted">(50)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Polo T-Shirts <small className="text-muted">(10)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Round Neck T-Shirts
                                <small className="text-muted">(10)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        V Neck T-Shirts <small className="text-muted">(10)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Hooded T-Shirts <small className="text-muted">(20)</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="list-group-collapse sub-men">
                            <a
                                className="list-group-item list-group-item-action"
                                href="#sub-men2"
                                data-toggle="collapse"
                                aria-expanded="false"
                                aria-controls="sub-men2"
                            >
                                Footwear
                            <small className="text-muted">(50)</small>
                            </a>
                            <div
                                className="collapse"
                                id="sub-men2"
                                data-parent="#list-group-men"
                            >
                                <div className="list-group">
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Sports Shoes <small className="text-muted">(10)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Sneakers <small className="text-muted">(20)</small>
                                    </a>
                                    <a
                                        href="#"
                                        className="list-group-item list-group-item-action"
                                    >
                                        Formal Shoes <small className="text-muted">(20)</small>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="list-group-item list-group-item-action">

                            Men <small className="text-muted">(150) </small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            Accessories <small className="text-muted">(11)</small>
                        </a>
                        <a href="#" className="list-group-item list-group-item-action">
                            Bags <small className="text-muted">(22)</small>
                        </a>
                    </div>
                </div>
                <div className="filter-price-left">
                    <div className="title-left">
                        <h3>Price</h3>
                    </div>
                    <div className="price-box-slider">
                        <div id="slider-range" />
                        <p>
                            <input
                                type="text"
                                id="amount"
                                readOnly=""
                                style={{ border: 0, color: "#fbb714", fontWeight: "bold" }}
                            />
                            <button className="btn hvr-hover" type="submit">
                                Filter
                            </button>
                        </p>
                    </div>
                </div>
                <div className="filter-brand-left">
                    <div className="title-left">
                        <h3>Brand</h3>
                    </div>
                    <div className="brand-box">
                        <ul>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios1"
                                        defaultValue="Yes"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios1"> Supreme </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios2"
                                        defaultValue="No"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios2"> A Bathing Ape </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios3"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios3"> The Hundreds </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios4"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios4"> Alife </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios5"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios5"> Neighborhood </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios6"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios6"> CLOT </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios7"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios7"> Acapulco Gold </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios8"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios8"> UNDFTD </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios9"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios9"> Mighty Healthy </label>
                                </div>
                            </li>
                            <li>
                                <div className="radio radio-danger">
                                    <input
                                        name="survey"
                                        id="Radios10"
                                        defaultValue="declater"
                                        type="radio"
                                    />
                                    <label htmlFor="Radios10"> Fiberops </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar;