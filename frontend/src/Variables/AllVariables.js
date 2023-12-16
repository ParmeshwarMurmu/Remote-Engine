
export const APP_URL = "http://localhost:8000";
export const TOKEN = localStorage.getItem('Remote-Engine-token');
export const USER_ID = localStorage.getItem('Remote-Engine-userId');


export const HEADERS = {
    Authorization: `bearer ${TOKEN}`,
};