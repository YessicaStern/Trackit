import React , {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (e)=>{
    const [token, setToken]=React.useState(undefined);
    const [habits, setHabits]=React.useState([]);


    return  (<AuthContext.Provider value ={{token,setToken,habits,setHabits}}>{e.children}</AuthContext.Provider>);
}