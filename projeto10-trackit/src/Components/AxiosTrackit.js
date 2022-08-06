import axios from "axios";

const BaseURL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(){
    const promise=axios.post(`${BaseURL}/auth/login`);
    return promise;
}
function postRegistration(e){
    const promise=axios.post(`${BaseURL}/auth/sign-up`,e);
    return promise;
}
export {postLogin,postRegistration};