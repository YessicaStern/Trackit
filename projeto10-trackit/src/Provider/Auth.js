import React , {useState} from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (e)=>{
    const [token, setToken]=React.useState(undefined);
    const [habits, setHabits]=React.useState([]);
    const [percentage,setPercentage]=React.useState(0);
    const [total,setTotal]=React.useState(0);


    return  (<AuthContext.Provider value ={{token,setToken,habits,setHabits,percentage,setPercentage,total,setTotal}}>{e.children}</AuthContext.Provider>);
}