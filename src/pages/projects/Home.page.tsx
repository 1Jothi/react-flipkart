import { Box, Grid } from "@mui/material"
import { MyNavbar } from "../../components/mynav/MyNavbar"
import { MySlider } from "../../components/mui/MySlider"
import { MySlider1 } from "../../components/slider/MySlider1"
import { MyUseEffect } from "../../components/hookes/MyUseEffect"

export const Home:React.FC<{}>=()=>{
    return <>
    <Box>
    <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
   <MyNavbar/>
</Grid>
<br/>
<Grid

  direction="row"
  justifyContent="center"
  alignItems="center"
>
  <MySlider1/>
</Grid>
<br/>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>

  <MyUseEffect/>
</Grid>
        
    </Box>
    </>
}