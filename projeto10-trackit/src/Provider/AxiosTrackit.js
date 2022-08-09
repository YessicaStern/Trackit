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
function postHabits(e,config){
    const promise=axios.post(`${BaseURL}/habits`,e,config);
    return promise;
}
function deleteHabits(e,config){
    const promise=axios.delete(`${BaseURL}/habits/${e}`,config);
    return promise;
}
function getHabitsToday(e){
    const promise=axios.get(`${BaseURL}/habits/today`,e);
    return promise;
}
function postCheck(id,config){
    const body = {};
    const promise=axios.post(`${BaseURL}/habits/${id}/check`,body,config);
    return promise;
}
function postUncheeck(id,config){
    const body = {};
    const promise=axios.post(`${BaseURL}/habits/${id}/uncheck`,body,config);
    return promise;
}
function getHistoric(e,e2){
    const promise=axios.get(`${BaseURL}/history/daily`,e,e2)
    return promise;
}
export {postLogin,postRegistration,getHabits,postHabits,deleteHabits,getHabitsToday,postCheck,postUncheeck,getHistoric};