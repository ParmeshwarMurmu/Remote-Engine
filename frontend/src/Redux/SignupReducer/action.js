import axios from "axios";

export const REGISTRATION_EMAIL = "REGISTRATION_EMAIL";



export const registrationEmailAction = (payload ) => {
    return { type: REGISTRATION_EMAIL, payload }
}


// const headers = {
//     Authorization: `bearer ${token}`,
// };


export const userRegistration = (data) => (dispatch) => {

    console.log(data);
    axios.post("http://localhost:8000/user/signUp", data)
    .then((res) => {
      console.log(res);
      alert(`${res.data.message}`)
      
    })
    .catch((err) => {
    

    }
    );
}
