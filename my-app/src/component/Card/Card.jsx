import React from 'react';

export const Card= ({children}) => {
    return (
    <div  className="flex justify-center flex-col  flex-wrap  h-70  
    w-60 shadow-2xl items-stretch border-4 border-violet-50 rounded-lg relative"> 
    {children}
    </div>
    )
}
export const CardTitle = ({children}) => {
    return (
        <div className="flex justify-center p-1text-violet-700 text-xl underline decoration-sky-600/30 ">{children}</div>
    )
}

export const CardHeader = ({children}) => {
    return (
        <div className="flex justify-center ">{children}</div>
    )
}
export const CardFooter = ({children}) => {
    return (
        <div className="">{children}</div> 
    )
}
export const CardInformation = ({children}) => {
    return (
        <span className="flex justify-center  items-center"> {children} </span>
    )
}
export const CardPicture = ({alt , src}) => {
    return (
        <img className="h-40 w-60 "src={src} alt={alt} />
    )
}
export const CardPrice = ({children}) => {
    return (
        <div className=" flex justify-center text-purple-500"> {children}</div>
    )
}