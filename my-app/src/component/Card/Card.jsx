import React from 'react';

export const Card= ({children}) => {
    return (
    <div className=" flex flex-col flex-wrap justify-center h-64 px-8 
    w-96 shadow-2xl items-stretch border-4 border-orange-50"> 
    {children}
    </div>
    )
}
export const CardTitle = ({children}) => {
    return (
        <div className="text-violet-700 text-xl ">{children}</div>
    )
}
export const CardHeader = ({children}) => {
    return (
        <div className="flex justify-center pt-6 ">{children}</div>
    )
}
export const CardFooter = ({children}) => {
    return (
        <div className="">{children}</div> 
    )
}
export const CardPicture = ({alt , src}) => {
    return (
        <img className="h-40 w-80"src={src} alt={alt} />
    )
}
export const CardPrice = ({children}) => {
    return (
        <div className="text-purple-500"> {children}</div>
    )
}