import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed"  style={{alignItems : "center", backgroundColor : "rgb(10 ,10 ,10 )"}}>
        <Toolbar variant="dense"  >
          <Typography variant="h4" color="rgb(98, 173, 238)">
            News for You
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
