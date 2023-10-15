import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function getLastAdded() {
    return await request(endpoints.getLastAdded, getOptions('GET'));
}

export async function getProductCategories() {
    return await request(endpoints.getProductsCategories, getOptions('GET'));
}

