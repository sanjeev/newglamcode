import Global from '../_helpers/global';

export const frontService = {
    allSlider,
    maincategory,
    allfaqs,
    locationall,
    knowData,
    knowDataSlug,
    datamancat,
};
async function allSlider() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/allslider`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}


async function datamancat() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/category/${localStorage.getItem("mid")}/${localStorage.getItem("id")}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function maincategory() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/maincategory/${localStorage.getItem("id") ? localStorage.getItem("id") : '2'}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function locationall() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/alllocation`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function knowData() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/knowdata/${localStorage.getItem("id") ? localStorage.getItem("id") : '2'}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function knowDataSlug(slug) {
    const requestOptions = {
        method: 'GET',
    };
    return fetch(Global.BASE_API_PATH + `/knowdataslug/${slug}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function allfaqs() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/faqs/${localStorage.getItem("id") ? localStorage.getItem("id") : '2'}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}


function handleResponse(response) {

    if (response.ok === false) {
        if (response.statusText === 'Unauthorized') {
            localStorage.removeItem("userDetails");
            localStorage.removeItem("userdata");
            window.location = '/';
        }
    } else {
        return response.text().then(text => {
            const data = JSON.parse(text);

            if (!response.ok) {
                if (response.status === 401) {
                    console.log(response);
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }
}