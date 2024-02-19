import { Rating, Typography } from "@mui/material"

export const MyStarRating:React.FC<{}>=()=>{
    return <>
    <Typography component="legend">No rating given</Typography>
<Rating name="no-value" value={null} />
    </>
}