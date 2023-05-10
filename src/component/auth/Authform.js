import { Box, Button, Dialog, FormControl, FormLabel, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const labelstyle = { mt: 1, mb: 1 };
// sx={{ marginTop: '20px', marginLeft: 'auto', marginRight: 'auto', width: 500 }}
function Authform() {
  return (
    <Dialog sx={{ marginTop: '30px'}} PaperProps={{ style: { borderRadius: 10 } }} open={true}>
      <Box sx={{ ml: 'auto', padding: 1 }}>
        <IconButton>
          <CloseRoundedIcon />
        </IconButton>
      </Box>
      <Typography variant="h4" textAlign="center">
        Login
      </Typography>
      <form>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          margin="auto"
          alignContent="center"
          padding={6}
        >
          <FormControl>
            <FormLabel sx={labelstyle}>Email</FormLabel>
            <TextField variant="standard" type="email" name="name" />
          </FormControl>
          <FormControl>
            <FormLabel sx={labelstyle}>Email</FormLabel>
            <TextField variant="standard" type="email" name="email" />
          </FormControl>
          <FormControl>
            <FormLabel sx={labelstyle}>Password</FormLabel>
            <TextField variant="standard" type="password" name="password" />
          </FormControl>
          <Button
            sx={{ marginTop: 2, borderRadius: 10, backgroundColor: '#2b2bd4' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <Button
           sx={{ marginTop: 2, borderRadius: 10 }} color="primary">
            switch
          </Button>
        </Box>
      </form>
    </Dialog>
  );
}

export default Authform;
