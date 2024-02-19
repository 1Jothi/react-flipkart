import { Box, Button, Grid, Paper, TextField } from "@mui/material"
import { Link } from "react-router-dom"

export const Login:React.FC<{}>=()=>{
    return <>
    <Box>
    <Paper>
    <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<h1>Login page</h1>

<TextField id="outlined-basic" label="Email" variant="outlined" />
<br />
<TextField id="outlined-basic" label="password" variant="outlined" />
<br />
<Link to="/project/home">       
    <Button variant="contained" color="error">Login</Button> </Link>
    <Link to="/project/Register">       
    <Button variant="outlined" color="error">Register</Button> </Link>        
</Grid>
</Paper>
    </Box>
    </>
}