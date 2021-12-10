import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PublicIcon from '@mui/icons-material/Public';
import ViewListIcon from '@mui/icons-material/ViewList';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{position : "fixed", bottom :"0" , width : "100%" , backgroundColor : "rgb(10,10,10)" , color : "rgb(98, 173, 238)"}}
      >
      <Link to = "/">
        <BottomNavigationAction icon={<LocationOnIcon />} style={{color : "white"}}/>
      </Link>
      <Link to = "/NewsGlobal">
        <BottomNavigationAction icon={<PublicIcon />} style={{color : "white"}}/>
      </Link>
      <Link to = "/Genre">
        <BottomNavigationAction icon={<ViewListIcon/>} style={{color : "white"}} />
      </Link>
      </BottomNavigation>
    </Box>
  );
}
