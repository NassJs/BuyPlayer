import React, {useState} from "react";
import './Toast.css';
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
 
export const ToastContext = createContext();

export const ToastProvider = ({children}) => {

    const [active, setActive] = useState(false);
    const [text , setText]= useState("");
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

export const Toast = ({children, text, toastVariant}) => {
   return(
    <div className={`flex justify-center  items-center h-20 bg-lime-300  ${toastVariant}`}>
       <span className="flex justify-center"> {text} </span>
       {children}
    </div>
   )
}
