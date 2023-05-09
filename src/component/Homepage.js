import { Box, Typography } from '@mui/material'
import Movieitems from './movieitems/Movieitems'
{/* height 40%  means use 40% of availeble space */}

function Homepage() {
  return (
 
  <Box width={'100%'} height='100%' marginTop={3} margin={'auto'}>
     <Box margin={'auto'} width={'100%'} height='40%' padding={4}>
        <img src='https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?b=1&s=170667a&w=0&k=20&c=VqVR2PMyaneOTn8f6wgEgM2V-zsHCzFMk6Wnm_kAf_k=' alt='immage'
        width={'100%'}
        height={'100%'}
        />
    </Box>
    <Box margin={'auto'} width={'100%'} height='40%' padding={4}>
        <Typography variant='h4' textAlign={'ce'}>latest release</Typography>
      
    </Box>
    <Box margin={'auto'} width={'80%'}  justifyContent={'center'} padding={4} display={'flex'} flexWrap={'wrap'}>
        {[1,2,3,4].map((items)=><Movieitems key={items}/>)}
     </Box>
  </Box>
  )
}

export default Homepage