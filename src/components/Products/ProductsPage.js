import SideBar from './SideBar.js';
import Catalog from './Catalog/Catalog.js';
import AllTitleBox from '../Common/AllTitleBox';
import { Outlet } from 'react-router-dom';
const ProductsPage = () => {

    return (
        <>
            <AllTitleBox title="PRODUCTS" />

            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">

                        <SideBar />

                        <Catalog />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;