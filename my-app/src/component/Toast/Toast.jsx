import React, {useState} from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
 
export const ToastContext = createContext();

export const ToastProvider = ({children}) => {

    const [active, setActive] = useState(false);
    const [text , setText]= useState("test");
    useEffect(() => {
        if (active){
            setTimeout(() => {
                setActive(false)
            }, 1000)
        }
    },[active])

    return (
        <ToastContext.Provider value={{active, setActive, text , setText}}>
            { active &&
            <Toast text={text} />
            }
            {children}
        </ToastContext.Provider>
    )
}

export const useToast  = () => {
    const {active , setActive} = useContext(ToastContext);
    const {text , setText } = useContext(ToastContext);

    const res = {
        setActive, setText 
    }
    return res;
}

export const Toast = ({text}) => {
   return(
    <div className=" flex justify-center w-40 bg-lime-500">
       <span className="flex ">{text}</span>
    </div>
   )
}
