import SideBar from './SideBar.js';
import Catalog from './Catalog/Catalog.js';
import AllTitleBox from '../Common/AllTitleBox';
import { Outlet, useParams } from 'react-router-dom';

const ProductsPage = () => {
    const { gender } = useParams();

    return (
        <>
            <AllTitleBox title="PRODUCTS" />

            <div className="shop-box-inner">
                <div className="container">
                    <div className="row">

                        <SideBar />
                        {
                            gender
                                ? <Outlet />
                                : <Catalog />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsPage;