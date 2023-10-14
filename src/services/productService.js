import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function getLastAdded() {
    return await request(endpoints.login, getOptions('GET'));
}

