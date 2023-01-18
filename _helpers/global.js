export default class Global {
    // static BASE_API_PATH = "http://localhost:8080/api";
    static BASE_API_PATH = "https://www.glamcode.in/api";
    static BASE_IMG_PATH = "https://www.glamcode.in/user-uploads/locations/";
    static BASE_APP_PATH = "https://www.glamcode.in";
    static MINPRICEORDER = 699;
};

export const range = (from, to, step) =>
    [...Array(Math.floor((to - from) / step) + 1)].map((_, i) => from + i * step);