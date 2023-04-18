const host = 'http://localhost:3030'

export const endpoints = {
    getProducts: `${host}/products/`,
    getProductById: `${host}/products/`,
    createProduct: `${host}/products/`,
    login: `${host}/users/login`,
    register: `${host}/users/register`,
    logout: `${host}/users/logout`,
    postOrder: `${host}/orders/create`,
    getOrders: `${host}/orders`,
    getWhishlist: `${host}/whishlist`,
    postWhishlist: `${host}/whishlist`,
    deleteWhishlist: `${host}/whishlist`,
}
