import { Box, Grid, Paper } from "@mui/material"
import { MyCard } from "./MyCard"
import img1 from '../../static/img/1.png'
import img2 from '../../static/img/2.jpg'
import img3 from '../../static/img/3.jpg'
import img4 from '../../static/img/5.png'

export const ParentContainer:React.FC<{}>=()=>{
    return <>
    <Box>
        <Paper>
        <Grid
  container
  direction="row"
  justifyContent="space-between"
  alignItems="center"
>

< MyCard img={img1}/>
    < MyCard img={img2}/>
    < MyCard img={img3}/>
    < MyCard img={img4}/>
</Grid>
        
        </Paper>
    </Box>
   
    </>
}