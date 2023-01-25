import Global from '../_helpers/global';

export const frontService = {
    search,
    allSlider,
    maincategory,
    allfaqs,
    locationall,
    knowData,
    knowDataSlug,
    datamancat,
    sendOtpcode,
    sendOtpverify,
    useSave,
    updateAddress,
    addressList,
    deleteaddress,
    defaultaddress,
    blogs,
    blogDetails,
    coupons,
    bookOrder,
    myBookings,
    cancelBooking,
    preferredPack,
    contact
};
async function search(s, location) {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/search?search_term=${s}&location=${location}`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function blogs() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/list-blogs`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function coupons() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/coupons-list`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function blogDetails(id) {
    const data = {
        id: id
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)

    };
    return fetch(Global.BASE_API_PATH + `/blogs-details`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

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
async function useSave(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/update-user`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function addressList(id) {
    const data = {
        user_id: id
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(Global.BASE_API_PATH + `/address-list`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function deleteaddress(data) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(Global.BASE_API_PATH + `/address-delete`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function defaultaddress(data) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    return fetch(Global.BASE_API_PATH + `/address-default`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function updateAddress(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/update-user-address`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}
async function sendOtpcode(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/sendotpcode`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function bookOrder(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/booking-save`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function sendOtpverify(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/verifyotpphone`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}


async function datamancat() {
    const requestOptions = {
        method: 'GET',

    };
    return fetch(Global.BASE_API_PATH + `/category/${localStorage.getItem("mid")}/${(localStorage.getItem("id") || localStorage.getItem("tid"))}`, requestOptions)
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
                    // console.log(response);
                }
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            return data;
        });
    }
}
async function myBookings(id) {
    const data = {
        user_id: id
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/bookingdata`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

async function cancelBooking(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/cancel-reschedule`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}


async function preferredPack(id) {
    const data = {
        location_id: id
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/preferredpack`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}



async function contact(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(Global.BASE_API_PATH + `/contact`, requestOptions)
        .then(handleResponse)
        .then(res => {
            return res;
        });
}

