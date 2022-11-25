import React, {useState} from 'react'
import sneakers from '../../../data/sneakerData.json'


const useSelectedSneaker = (selectedSneaker) => {
    const [sneakerInfo, setSneakerInfo] = ([])

  let sneakerPrice = 0
  let sneakerName = ""
  let sneakerBrand = ""
  let sneakerModel = ""
  let sneakerImage = ""
  let sneakerData = []


  for(let i=0;i<=sneakers.length-1;i++){
    if(sneakers[i].name === selectedSneaker){
        sneakerPrice = sneakers[i].price
        sneakerBrand = sneakers[i].brand
        sneakerModel = sneakers[i].model
        sneakerName = sneakers[i].name
        sneakerImage = sneakers[i].image

        sneakerData = [{
            brand: sneakerBrand,
            model: sneakerModel,
            name: sneakerName,
            image: sneakerImage,
            price: sneakerPrice,
        }]

        // setSneakerInfo({
        //     brand: sneakerBrand,
        //     model: sneakerModel,
        //     name: sneakerName,
        //     image: sneakerImage,
        //     price: sneakerPrice,

        // })

            // console.log(sneakerBrand)
        // console.log(sneakerModel)
        // console.log(sneakerName)
        // console.log(sneakerPrice)
    }
}
  return sneakerData
}

export default useSelectedSneaker