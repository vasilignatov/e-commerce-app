import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function createOrder(data) {
    return await request(endpoints.postOrder, getOptions('POST', data));
}

export async function getOrdersById(id) {
    return await request(endpoints.order + `/${id}`, getOptions('GET'));
}