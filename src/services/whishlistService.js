import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function getWhishlist() {
    return await request(endpoints.getWhishlist, getOptions('GET'));
}
export async function addProductToWhishlist(productId) {
    return await request(endpoints.addProductToWhishlist, getOptions('POST', productId));
}
export async function removeFromWhishlist(productId) {
    return await request(endpoints.removeFromWhishlist, getOptions('DELETE', productId));
}