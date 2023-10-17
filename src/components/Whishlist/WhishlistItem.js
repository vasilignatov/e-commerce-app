import { Link } from 'react-router-dom';

const WhishlistItem = ({ product, removeItem }) => {
    console.log(product);
    const path = `../../products/${product.gender}/${product.subCategory}/${product._id}`;

    return (
        <tr>
            <td className="thumbnail-img">
                <Link relative='path' to={path}>
                    <img
                        className="img-fluid"
                        src={product.images[0]}
                        alt="Product image"
                    />
                </Link>
            </td>

            <td className="name-pr">
                <a href="">{product.title}</a>
            </td>

            <td className="price-pr">
                <p>$ {product.price}</p>
            </td>

            <td className="quantity-box">In Stock</td>

            <td className="add-pr">
                <Link className="btn hvr-hover" to={path}>
                    Move to Cart
                </Link>
            </td>

            <td className="remove-pr">
                <button className='btn btn-link' onClick={() => removeItem({productId: product._id })}>
                    <i className="fas fa-times" />
                </button>
            </td>

        </tr>
    )
}

export default WhishlistItem;