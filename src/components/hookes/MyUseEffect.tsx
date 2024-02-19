import { useEffect, useState } from "react"
import { apiCaller } from "../../api/flipkartApi"
import { MyCard } from "../cards/MyCard"
import { Grid } from "@mui/material"

export const MyUseEffect:React.FC<{}>=()=>{
let [apiData,setApiData]=useState<any>([]);
useEffect(()=>{
    (async()=>{
        setApiData(await apiCaller())
  
           
        })();
},[])


   

    
    return <>
    
<Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>
{apiData.map((item:any)=>{
        return <MyCard img={item.image}/>
    })}

</Grid>


   
    </>
}