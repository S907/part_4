import React, { useEffect, useState } from "react";

export const useFetch=(options)=>{
    const[dta,setDta]=useState(null);

    useEffect(()=>{
        console.log('usefetch USEffect');
        fetch(options.url, { mode: 'no-cors'}).
        then(res=>res.json()).
        then(res=>setDta(res))
    },[])
    return{
        dta,
    }
}