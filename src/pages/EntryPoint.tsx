import { Box, Button, Grid, Paper } from "@mui/material"
import { Link } from "react-router-dom"

export const EntryPoint: React.FC<{}> = () => {
    return <>
    <Box >
        <Paper elevation={2}>
            
<Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>were do u want to go?</h1>
        <Link to="/project/home">
            <Button color="error" variant="contained" disableElevation>
                project
            </Button>
        </Link>


        <Link to="/all-lessons/all">
            <Button variant="contained" disableElevation>
                lessons
            </Button>
        </Link>
</Grid>

    
        </Paper>
    </Box>
      

    </>
}