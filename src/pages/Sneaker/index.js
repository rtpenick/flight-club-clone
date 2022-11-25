import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

import { Drawer, Box } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import {Drawer as SideDrawer} from './components/Drawer';


import './styles.css'
import SneakerSizes from './components/SneakerSizes';
import SneakerDetails from './components/SneakerDetails';

import useSelectedSneaker from './hooks/useSelectedSneaker';

const Index = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const params = useParams()
  const [sneakerData] = useSelectedSneaker(params.name)


  return (
    <div className="Sneaker">
        <div className="Sneaker_image">
            <img 
              src={sneakerData.image} 
              alt="none"
              height={420}
              width={575}
            />
        </div>

        <div className="Sneaker_rightContent_container">
            <SneakerDetails sneakerData={sneakerData} setIsDrawerOpen={setIsDrawerOpen}/>
        </div>
      <div className='Sneaker_checkoutDrawer'>
      {/* component */}
          <Drawer
            anchor='right'
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box className='checkoutDrawer_container'>
              <Box className='checkoutDrawer_header'>
                <p className='checkoutDrawer_Title'>{sneakerData.name}</p>
                <CloseIcon 
                  onClick={() => setIsDrawerOpen(false)}
                />

                {/* <IconButton>
                </IconButton> */}
              </Box>
              <Box className='checkoutDrawer_shippingBtns'>
                <p>DELIVERY & PICKUP OPTIONS</p>
                <Button variant="outlined">SHIP IT</Button>
                <Button variant="outlined">PICK UP</Button>
              </Box>
              <Box>
                <p>BUY NEW</p>
                <p>*Not all items are eligible for Next Day shipping. Terms and conditions apply</p>
              </Box>
                <Box>
                  <Button className='checkoutDrawer_checkoutBtn'
                    variant="contained" 
                    disableElevation
                  >
                    CHECK OUT
                  </Button>
                </Box>
            </Box>
          </Drawer>
      </div>
      <div className='Sneaker_recommendations'>
        {/* component */}
      </div>
    </div>
  )
}

export default Index