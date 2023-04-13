import SideBar from './SideBar.js';
import Catalog from './Catalog/Catalog.js';

const ProductsPage = () => {

    return (
        <div className="shop-box-inner">
            <div className="container">
                <div className="row">

                    <SideBar />

                    <Catalog />

                </div>
            </div>
        </div>

    )
}

export default ProductsPage;