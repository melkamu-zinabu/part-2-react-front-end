import React, { useEffect, useState } from 'react'
import {AppBar, Autocomplete, Box, Tab, Tabs, TextField, Toolbar} from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';
import { getallmovie } from '../api-helper/api-helper';
import { Link } from 'react-router-dom';
const dummyarray=['memory','hello',"fiker"]
function Header() {
  const [value,setvalue]=useState(0)
  const [movies, setmovies]=useState([])

  useEffect(()=>{
    try {
        getallmovie().then((res)=>{
            console.log(res.data.movie);
            setmovies(res.data.movie)})
        
 
    } catch (error) {
       console.log(error)
    }
    
   

  },[])
  return (
   <AppBar sx={{bgcolor:'#345678'}} position='sticky'>
    {/* make appbar posn sticky not cover content comes after it */}
    <Toolbar>
        <Box width={'20%'}>
           <MovieIcon/> 
        </Box>
        <Box width={'30%'} margin={'auto'}>
        <Autocomplete
       
        freeSolo
       options = {movies && movies.map((option) => option.title)}

        renderInput={(params) => (
        <TextField 
        sx={{input:{color:'red'}}}
         {...params}
          label="search movie" />)}
      />
        </Box>
        <Box display={'flex'}>
            <Tabs textColor='white' indicatorColor='secondary' value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab LinkComponent={Link} to= "/admin" label={'admin'}/>
                <Tab LinkComponent={Link} to= "/user" label={'user'}/>
                <Tab LinkComponent={Link} to= "/movie" label={'movie'}/>
                <Tab LinkComponent={Link} to= "/auth" label={'auth'}/>
            
                {/* these ar like array in tabs */}
            </Tabs>
        </Box>

    </Toolbar>
    </AppBar>
  )
}

export default Header
