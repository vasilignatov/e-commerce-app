import './WhishlistPage.css';
import AllTitleBox from "../Common/AllTitleBox.js";
import { isAuth } from "../../hoc/isAuth.js";
import { useEffect, useState } from 'react';
import WhishlistItem from '../Whishlist/WhishlistItem.js';
import * as whishlistService from '../../services/whishlistService.js'

const WhishlistPage = () => {

    const [whishlistItemsCount, setWhishlistItemsCount] = useState();
    const [whishlist, setWhishlist] = useState();

    useEffect(() => {
        (async () => {
            const data = await whishlistService.getWhishlist();
            setWhishlistItemsCount(data.length);
            setWhishlist(data);
        })();
    }, [whishlistItemsCount]);

    async function removeItem(productId) {
        await whishlistService.removeFromWhishlist(productId)
        setWhishlistItemsCount(whishlistItemsCount - 1);
    }

    return (
        <>
            <AllTitleBox title="Whishlist" />

            <div className="wishlist-box-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-main table-responsive">
                                {
                                    whishlist?.length == 0
                                        ? <h2 className="heading-centerd">There is no products in your whishlist!</h2>
                                        : <table className="table">
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
                                                    whishlist?.map(item => {
                                                        return <WhishlistItem
                                                            key={item._id}
                                                            product={item.productId}
                                                            removeItem={removeItem}
                                                        />
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                }
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