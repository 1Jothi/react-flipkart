import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
//import img from '../../static/img/1.png'
export const MyCard:React.FC<{img:string}>=(props)=>{
    return <>
      <Card sx={{ maxWidth: 255 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    
    </>
}