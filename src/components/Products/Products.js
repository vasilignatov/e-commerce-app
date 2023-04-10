import SideBar from '../Products/SideBar.js';
import Catalog from '../Products/Catalog/Catalog.js';

const Products = () => {

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

export default Products;