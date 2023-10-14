const host = 'http://localhost:3000'

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
    // orders routes
    postOrder: `${host}/orders/create`,
    getOrders: `${host}/orders`,
    // whishlist routes
    getWhishlist: `${host}/whishlist`,
    postWhishlist: `${host}/whishlist`,
    deleteWhishlist: `${host}/whishlist`,
}
