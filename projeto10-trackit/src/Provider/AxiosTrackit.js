import axios from "axios";

const BaseURL="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function postLogin(e){
    const promise=axios.post(`${BaseURL}/auth/login`,e);
    return promise;
}
function postRegistration(e){
    const promise=axios.post(`${BaseURL}/auth/sign-up`,e);
    return promise;
}
function getHabits(e){
    const promise=axios.get(`${BaseURL}/habits`,e);
    return promise;
}
function postHabits(e,e2){
    const promise=axios.post(`${BaseURL}/habits`,e,e2);
    return promise;
}
function deleteHabits(e,e2){
    const promise=axios.delete(`${BaseURL}/habits/${e}`,e2);
    return promise;
}
function getHabitsToday(e){
    const promise=axios.get(`${BaseURL}/habits/today`,e);
    return promise;
}

export {postLogin,postRegistration,getHabits,postHabits,deleteHabits,getHabitsToday};