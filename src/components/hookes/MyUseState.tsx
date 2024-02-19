import { useState } from "react"

export const MyUseState:React.FC<{}>=()=>{
    let [data,setData]=useState("mydata12")
    return <>
    <input type="text" name="" id="" onChange={(e)=>{setData(e.target.value)}}/>
    {data}
    </>
}