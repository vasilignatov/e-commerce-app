const host = 'https://e-commerce-rest-api-oa27.onrender.com/'

export const endpoints = {
    // auth routes
    login: `${host}/auth/login`,
    register: `${host}/auth/register`,
    logout: `${host}/auth/logout`,
    // products routes
    getProducts: `${host}/products/`,
    getProductById: `${host}/products/`,
    createProduct: `${host}/products/`,
    getLastAdded: `${host}/products/last-added`,
    getProductsCategories: `${host}/products/get-products-categories`,
    // orders routes
    postOrder: `${host}/orders/create`,
    getOrders: `${host}/orders`,
    // whishlist routes
    getWhishlist: `${host}/whishlist`,
    addProductToWhishlist: `${host}/whishlist`,
    removeFromWhishlist: `${host}/whishlist`,
}
