import { createContext, useReducer, useState } from "react";

export const userContext = createContext()


export const UserContextProvidor = ({children})=>{
    
    const authReducer = (state, action)=>{
        switch(action.type){
            case "LOGIN":
                return {user:action.payload}
            case "LOGOUT":
                return {user:null}
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(authReducer,{
        user:null
    })
    useState(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
          dispatch({ type: 'LOGIN', payload: user });
        } else {
        }
    },[])

    return(
        <userContext.Provider value={{...state, dispatch}}>{children}</userContext.Provider>
    )
}