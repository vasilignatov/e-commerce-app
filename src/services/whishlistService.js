import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function addProductToWhishlist() {
    return await request(endpoints.postWhishlist, getOptions('POST', {}))
}