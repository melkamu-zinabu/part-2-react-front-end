import React, { useState } from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
const dummyarray=['memory','hello',"fiker"]
function Header() {
  const [value,setvalue]=useState(0)
  return (
   <AppBar sx={{bgcolor:'#345678'}}>
    <Toolbar>
        <Box width={'20%'}>
           <MovieIcon/> 
        </Box>
        <Box width={'30%'} margin={'auto'}>
        <Autocomplete
       
        freeSolo
        options={dummyarray.map((option) => option)}
        renderInput={(params) => (
        <TextField 
        sx={{input:{color:'red'}}}
         {...params}
          label="search movie" />)}
      />
        </Box>
        <Box display={'flex'}>
            <Tabs textColor='white' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab label={'admin'}/>
                <Tab label={'user'}/>
                <Tab label={'author'}/>
                {/* these ar like array in tabs */}
            </Tabs>
        </Box>

    </Toolbar>
    </AppBar>
  )
}

export default Header
