const WhishlistItem = (product) => {
    return (
        <tr>
            <td className="thumbnail-img">
                <a href="">
                    <img
                        className="img-fluid"
                        src={product.images[0]}
                        alt=""
                    />
                </a>
            </td>

            <td className="name-pr">
                <a href="">{product.title}</a>
            </td>

            <td className="price-pr">
                <p>$ {product.price}</p>
            </td>

            <td className="quantity-box">In Stock</td>

            <td className="add-pr">
                <a className="btn hvr-hover" href="">
                    Move to Cart
                </a>
            </td>

            <td className="remove-pr">
                <a href="#">
                    <i className="fas fa-times" />
                </a>
            </td>

        </tr>
    )
}

export default WhishlistItem;