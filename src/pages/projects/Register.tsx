import { Box, Button, Grid, Paper, TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const Register:React.FC<{}>=()=>{
    return <>
    <Box>
    <Paper>
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>Register page</h1>
<TextField id="outlined-basic" label="Name" variant="outlined" />
<br />
<TextField id="outlined-basic" label="Email" variant="outlined" />
<br />
<TextField id="outlined-basic" label="password" variant="outlined" />
<br />
<Link to="/project/login">       
    <Button variant="contained" color="error">login</Button> </Link>
    <Link to="/project/login">       
    <Button variant="outlined" color="error">Register</Button> </Link>        
</Grid>
</Paper>
    </Box>
    </>
}