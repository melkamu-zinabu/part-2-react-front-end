import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
//pass props to make thre card s dynamic
function Movieitems({id,releasedate,title,posterurl}) {
  return (
    <Card sx={{ margin:3,Width: 300,height:320,borderRadius:5,
     ":hover":{boxShadow:"10px 10px 20px #ccc"}}}>
    <CardActionArea>
      <img
        width={'100%'}
        height="50%"
        src={posterurl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {new Date(releasedate).toDateString()}
       </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button sx={{margin:'auto'}} size="small" color="primary">
        Book
      </Button>
    </CardActions>
  </Card>
  )
}

export default Movieitems
