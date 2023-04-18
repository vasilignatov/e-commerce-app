import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function createOrder(data, userId) {
    return await request(endpoints.order, getOptions('POST', { data, userId }));
}
export async function createOrder() {
    return await request(endpoints.order, getOptions('GET'));
}