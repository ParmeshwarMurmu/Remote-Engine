
export const APP_URL = "https://remote-engine.onrender.com";
export const TOKEN = localStorage.getItem('Remote-Engine-token');
export const USER_ID = localStorage.getItem('Remote-Engine-userId');


export const HEADERS = {
    Authorization: `bearer ${TOKEN}`,
};