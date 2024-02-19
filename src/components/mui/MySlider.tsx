import { VolumeDown, VolumeUp } from "@mui/icons-material"
import { Slider, Stack } from "@mui/material"

export const MySlider:React.FC<{}>=()=>{
    return <>
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
  <VolumeDown />
  <Slider aria-label="Volume" value={2}  />
  <VolumeUp />
</Stack>
    </>
}