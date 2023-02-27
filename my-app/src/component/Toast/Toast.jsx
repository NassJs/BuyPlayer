import React, {useState} from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
 
export const ToastContext = createContext(null);

export const ToastProvider = ({children}) => {

    const [active, setActive] = useState(false);

    useEffect(() => {
        if (active){
            setTimeout(() => {
                setActive(false)
            },1000)
        }
    },[active])

    return (
        <ToastContext.Provider value={{active, setActive}}>
            { active &&
            <Toast text />
            }
            {children}
        </ToastContext.Provider>
    )
}

export const useToast  = () => {
    const {active , setActive} = useContext(ToastContext);
    return setActive;
}

export const Toast = (text) => {
   return(
    <div className="h-10 w-40 rounded-full bg-lime-500">
       <span className="flex justify-center">{text}</span>
    </div>
   )
}
