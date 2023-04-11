
export async function request(url, options) {
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch (err) {
            return response;
        }
    } catch (err) {
        console.log(err.message);
        throw err;
    }
}


export function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {}
    };

    // TODO: 
    const user = null;

    if (user) {
        options.headers['X-Parse-Session-Token'] = user.sessionToken;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}