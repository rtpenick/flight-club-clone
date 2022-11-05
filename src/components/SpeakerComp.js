// this component is to log prop values passed to it
import React from 'react'

const SpeakerComp = ({sneakerProp}) => {
    console.log("Speaker Component: " + sneakerProp)
  return (
    <div>SpeakerComp Values: {sneakerProp}</div>
  )
}

export default SpeakerComp