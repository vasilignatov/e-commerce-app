import { endpoints } from '../endpoints.js';
import { request, getOptions } from './utils.js';

export async function login(email, password) {
    return await request(endpoints.login, getOptions('POST', { email, password }));
}

export async function register(email, username, password) {
    return await request(endpoints.register, getOptions('POST', { email, username, password }));
}

export async function logout() {
    return await request(endpoints.logout, getOptions('POST'));
}