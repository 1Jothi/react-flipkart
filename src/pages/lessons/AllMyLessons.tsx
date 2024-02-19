import { Box, Tab } from "@mui/material"
import { MyAlert } from "../../components/mui/MyAlert"
import { MyAvtar } from "../../components/mui/MyAvtar"
import { MyButtons } from "../../components/mui/MyButtons"
import { MySlider } from "../../components/mui/MySlider"
import { MyStarRating } from "../../components/mui/MyStarRating"
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from "react"
import { Fragment } from "../../components/fragment/Fragment"
import { Buttons } from "../../components/buutons/Buttons"
import { ParentContainer } from "../../components/cards/ParentContainer"
import { MyUseState } from "../../components/hookes/MyUseState"
import { MyUseEffect } from "../../components/hookes/MyUseEffect"
import { Mystyle } from "../../components/styles/Mystyle"


export const AllMyLessons: React.FC<{}> = () => {

  let [value, setValue] = useState("1")
  return <>




    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={(e, num) => { setValue(num) }} aria-label="lab API tabs example">
            <Tab label="Mui topics" value="1" />
            <Tab label="fragment" value="2" />
            <Tab label="expression in html" value="3" />
            <Tab label="props" value="4"/>
            <Tab label="hookes" value="5"/>
            <Tab label="Mystyle" value="6"/>
          </TabList>
        </Box>
        <TabPanel value="1">

          <h1>im a notes of mui</h1>
          im working 1233
          <MyButtons />
          <MyStarRating />
          <MySlider />
          <MyAvtar />
          <MyAlert />
        </TabPanel>
        <TabPanel value="2">
          <Fragment />
        </TabPanel>
        <TabPanel value="3">
          <Buttons />
        </TabPanel>
        <TabPanel value="4">
          < ParentContainer/>
 
        </TabPanel>
        <TabPanel value="5">
         <MyUseState/>
         <MyUseEffect/>
 
        </TabPanel>
        <TabPanel value="6">

 <Mystyle/>
        </TabPanel>

      </TabContext>
    </Box>


  </>
}