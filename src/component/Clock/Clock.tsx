import React, {useEffect, useState} from "react";

type PropsType={

}

export const Clock:React.FC<PropsType>=(props)=>{
    const [date,setdate]=useState(new Date())

    useEffect(()=>{
       const intervalID=setInterval(()=>{
            setdate(new Date())
        },1000)

        return()=>{
          clearInterval(intervalID)
        }
    },[])

    const getToString=(num:number)=>num<10? "0"+ num : num

    const secondsString=getToString(date.getSeconds())
    const minutesString=getToString(date.getMinutes())
    const hoursString=getToString(date.getHours())

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}