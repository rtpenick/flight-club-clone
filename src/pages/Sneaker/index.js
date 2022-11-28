import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

import { Drawer, Box } from '@mui/material';

// import {Drawer as SideDrawer} from './components/Drawer';


import './styles.css'
import SneakerSizes from './components/SneakerSizes';
import SneakerDetails from './components/SneakerDetails';

import useSelectedSneaker from './hooks/useSelectedSneaker';
import ShoeStore from '../../components/ShoeStore';
import SideDrawer from './components/SideDrawer';

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
          <SideDrawer sneakerData={sneakerData} isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
        </div>
        
        <div className='Sneaker_recommendations'>
          {/* component */}
          {/* <ShoeStore/> */}
        </div>
    </div>
  )
}

export default Index