import React, {createContext, useMemo, useState , useContext} from "react";

export const MoneyContext = createContext();

export const MoneyProvider = ({children}) => {
    const [money , setMoney] = useState(0); 

    const value = useMemo(() => ({
        money , setMoney
    }), [money])

    return (
       <MoneyContext.Provider value={value}>
            {children}
       </MoneyContext.Provider>
    )
}

export const useMoney = () => {
    const { money , setMoney } = useContext(MoneyContext);
    const updateMyMoney = (value) => {
        setMoney(value)
    }
    return { money , updateMyMoney }
}


