import React, { useState, createContext, useMemo, useContext } from 'react';

const CountContext = createContext()

export const CountProvider = ({children}) => {
    const [count, setCount] = useState(0);
    console.log(count);
    
    const value = useMemo(() => ({
        count, setCount
    }), [count])

    return (
    <CountContext.Provider value={value}>
        {children}
    </CountContext.Provider>
    )
}

export const useCount = () => {
    const {count , setCount} = useContext(CountContext);
    console.log(count);
    const IncrementeCount = (value) => {
        setCount(count + value)
    }

    return { count , IncrementeCount}
}