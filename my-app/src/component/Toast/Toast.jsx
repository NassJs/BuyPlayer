import React, {useState} from "react";
import { useEffect } from "react";
import { GrValidate } from 'react-icons/gr';
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
            },3000)
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

export const Toast = ({children, text}) => {
   return(
    <div className=" flex justify-center items-center h-20 w-60 bg-lime-300">
        <GrValidate /> 
       <span className="flex pr-4 pl-4"> {text} </span>
       {children}
    </div>
   )
}
