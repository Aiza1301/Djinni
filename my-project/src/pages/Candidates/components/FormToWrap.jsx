import React from 'react';
import { LuMoveRight } from "react-icons/lu";



function FormToWrap() {
  return (
    <div className='page__filter-group'>
        <div className="form-content">
        <h5 className='h5-title'>Work experience</h5>
          <input type="number" className='formto' placeholder='Form' />
          <input type="number" className='formto' placeholder='To' />
           <button className='submit'><LuMoveRight  className='lumove'/></button>
        </div>
        <div className="form-content">
        <h5 className='h5-title'>Work experience</h5>
          <input className='formto' type="text"  placeholder='Form'/>
          <input className='formto' type="text" placeholder='To' />
          <button className='submit'><LuMoveRight /></button>
        </div>
       
    </div>
  )
}

export default FormToWrap;

