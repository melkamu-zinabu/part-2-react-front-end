import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getallmovie } from '../../api-helper/api-helper';
import Movieitems from './Movieitems';

function Movie() {
   const [movies, setmovies]=useState([]);
   useEffect(()=>{
    try {
        getallmovie().then((res)=>{
            console.log(res.data.movie);
            setmovies(res.data.movie)})
        
 //movie is model in res.data.movie
    } catch (error) {
       console.log(error)
    }
    
   

  },[])
  return (
    <Box padding={3} margin={'auto'} margintop={4}>
        <Typography  variant='h4' padding={2} textAlign={'center'} color="white" bgcolor={"#234ff4"} width={'40%'} margin={'auto'}>
            all movies
        </Typography>
        <Box width={'100%'} margin={'auto'} display={"flex"} justifyContent={'flex-start'} flexWrap={'wrap'}>
            {movies&&movies.map((movie,index)=><Movieitems id={movie._id} title={movie.title} releasedate={movie.releasedate} posterurl={movie.posterurl} key={index} />)}

        </Box>
    </Box>
  )
}

export default Movie
