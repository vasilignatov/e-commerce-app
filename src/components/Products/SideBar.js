/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getProductCategories } from '../../services/productService';

const SideBarItem = ({ data }) => {
    return (
        <Link
            to={`${data.category}/${data.type}`}
            className="list-group-item list-group-item-action"
        >
            {data.type.toUpperCase()} <small className="text-muted">({data.count})</small>
        </Link>
    )
}


const SideBar = () => {

    const [maleCategories, setMaleCategories] = useState([]);
    const [femaleCategories, setFemaleCategories] = useState([]);
    const [itemCounts, setItemCounts] = useState();

    useEffect(() => {
        (async () => {
            const { male, female } = await getProductCategories();
            const maleCatArr = Object.entries(male);
            const femaleCatArr = Object.entries(female);
            const maleItems = Object.values(male).reduce((acc, c) => acc += Number(c), 0);
            const femaleItems = Object.values(female).reduce((acc, c) => acc += Number(c), 0);
            setMaleCategories(maleCatArr);
            setFemaleCategories(femaleCatArr);
            setItemCounts({ maleItems, femaleItems });
        })();
    }, []);

    return (
        <div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
            <div className="product-categori">

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
                                Female <small className="text-muted">({itemCounts?.femaleItems})</small>
                            </a>
                            <div
                                className="collapse show"
                                id="sub-men1"
                                data-parent="#list-group-men"
                            >
                                <div className="list-group">

                                    {
                                        femaleCategories?.map(([k, v], i) => <SideBarItem key={i} data={{ type: k, count: v, category: 'woman' }} />)
                                    }

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
                                Male
                                <small className="text-muted"> ({itemCounts?.maleItems}) </small>
                            </a>
                            <div
                                className="collapse"
                                id="sub-men2"
                                data-parent="#list-group-men"
                            >
                                <div className="list-group">

                                    {
                                        maleCategories?.map(([k, v], i) => <SideBarItem key={i} data={{ type: k, count: v, category: 'man' }} />)
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SideBar;