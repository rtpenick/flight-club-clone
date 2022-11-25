import React from 'react'

const SneakerSizes = () => {
  return (
    <div>
        <label className="option_item" htmlFor="size4">
            <input type="radio" name="radio" id="size4"/>
            <div className='option-inner'>
                <div className='icon'></div>
                <div className='tickmark'></div>
            </div>
        </label>

        <label className="option_item" htmlFor="size3">
            <input type="radio" name="radio" id="size3"/>
            <div className='option-inner'>
                <div className='icon'></div>
                <div className='tickmark'>This</div>
            </div>
        </label>
    </div>
  )
}

export default SneakerSizes