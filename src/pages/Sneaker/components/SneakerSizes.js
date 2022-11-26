import React from 'react'

const SneakerSizes = ({sneakerData}) => {
  return (
    <div>
        <p>SELECT US MENS</p>

        <div class="radios">
            {/* {sneakerData.sizes.map(item => (
                <>
                <input type="radio" id="r1" name="rGroup"/>
                <label class="radio" for="r1" name="rGroup">{item}</label>
                </>
            ))} */}
            <input type="radio" id="r1" name="rGroup"/>
            <label class="radio" for="r1" name="rGroup">8</label>

            <input type="radio" id="r2" name="rGroup"/>
            <label class="radio" for="r2" name="rGroup">8.5</label>

            <input type="radio" name="rGroup" value="3" id="r3" />
            <label class="radio" for="r3">9</label>

            <input type="radio" name="rGroup" value="3" id="r4" />
            <label class="radio" for="r4">9.5</label>
            
            <input type="radio" name="rGroup" value="3" id="r5" />
            <label class="radio" for="r5">10</label>

            <input type="radio" name="rGroup" value="3" id="r6" />
            <label class="radio" for="r6">10.5</label>
            
            <input type="radio" name="rGroup" value="3" id="r7" />
            <label class="radio" for="r7">11</label>
        </div>
    </div>
  )
}

export default SneakerSizes