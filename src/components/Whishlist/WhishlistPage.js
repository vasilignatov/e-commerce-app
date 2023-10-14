import AllTitleBox from "../Common/AllTitleBox.js";
import { isAuth } from "../../hoc/isAuth.js";

import WhishlistItem from '../Whishlist/WhishlistItem.js';
import * as whishlistService from '../../services/whishlistService.js'

const WhishlistPage = () => {

    

    return (
        <>
            <AllTitleBox title="Whishlist" />

            <div className="wishlist-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Images</th>
                                            <th>Product Name</th>
                                            <th>Unit Price </th>
                                            <th>Stock</th>
                                            <th>Add Item</th>
                                            <th>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// export default WhishlistPage;
export default isAuth(WhishlistPage);