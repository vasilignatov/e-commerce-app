const CategoriesShop = () => {
    return (
        <div className="categories-shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/t-shirts-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">T-shirts</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/shirt-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">Shirt</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/wallet-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">Wallet</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/women-bag-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">Bags</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/shoes-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">Shoes</a>
                        </div>
                        <div className="shop-cat-box">
                            <img className="img-fluid" src="images/women-shoes-img.jpg" alt="" />
                            <a className="btn hvr-hover" href="#">Women Shoes</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesShop;