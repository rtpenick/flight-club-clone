import React, {useState} from 'react'
import { Drawer, Box } from '@mui/material';


const SideDrawer = () => {
  return (
    <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
    >
        <Box sx={{
            width: "450px",
            padding: "2rem"
        }}>

        </Box>
    </Drawer>
  )
}

export default SideDrawer