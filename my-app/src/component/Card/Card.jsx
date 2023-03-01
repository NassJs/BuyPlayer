import React from 'react';

export const Card= ({children}) => {
    return (
    <div  className="flex flex-col flex-wrap justify-center px-8 
    w-96 shadow-2xl items-stretch border-4 border-violet-50 relative"> 
    {children}
    </div>
    )
}
export const CardTitle = ({children}) => {
    return (
        <div className="text-violet-700 text-xl underline decoration-sky-600/30 ">{children}</div>
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
export const CardInformation = ({children}) => {
    return (
        <span className="bg-orange-200 rounded-lg"> {children}</span>
    )
}
export const CardPicture = ({alt , src}) => {
    return (
        <img className="h-40 w-80 object-scale-down"src={src} alt={alt} />
    )
}
export const CardPrice = ({children}) => {
    return (
        <div className="text-purple-500"> {children}</div>
    )
}