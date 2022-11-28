import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { Drawer, Box } from '@mui/material';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const SideDrawer = ({isDrawerOpen,setIsDrawerOpen,sneakerData}) => {
  return (
    <Drawer
      anchor='right'
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
    >
      <Box className='checkoutDrawer_container'>
        <Box className='checkoutDrawer_header'>
          <Box className='checkoutDrawer_header_title&size'>
            <p className='checkoutDrawer_Title'>{sneakerData.name}</p>
            <p className='checkoutDrawer_Size'>US Men Size 9.5</p>
          </Box>
          <CloseIcon 
            onClick={() => setIsDrawerOpen(false)}
          />
        </Box>
        <Box className='checkoutDrawer_shippingBtns'>
          <Box>
            <p>DELIVERY & PICKUP OPTIONS</p>
          </Box>
          <Button variant="outlined">SHIP IT</Button>
          <Button variant="outlined">PICK UP</Button>
        </Box>
        <Box>
          <p>BUY NEW</p>
          <p className='checkoutDrawer_Size'>*Not all items are eligible for Next Day shipping. Terms and conditions apply</p>
        </Box>
          <Box className='checkoutDrawer_checkoutBtn_container'>
          <Link to="../checkout">
            <Button className='checkoutDrawer_checkoutBtn'
                variant="contained" 
                disableElevation
              >
                CHECK OUT
              </Button>
          </Link>
            
          </Box>
      </Box>
     </Drawer>
  )
}

export default SideDrawer