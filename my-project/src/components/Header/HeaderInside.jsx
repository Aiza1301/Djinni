import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIn from '../Button/ButtonIn';
import ButtonUp from '../Button/ButtonUp';

function HeaderInside() {
  return (
    <div className='header_inside'>
      <div className="container">
        <div className="header_wrapper">
            <div className="header_logo">
                <img src="/public/djinni-logo.png" alt="header inline logo" width={'65px'} />
                <img src="/public/logo-uzb.png" alt="header inline logo"  width={'25px'}/>
            </div>
              <ul className='header_navbar'>
              <Link to={`/developers/`} className='header-item'>Candidates</Link>
              <li className='header-item'>Jobs</li>
              <li className='header-item'>Salaries</li> {/* Link router dom  */}
              </ul>
           <div className="header_buttons">
           <ButtonIn/>
            <ButtonUp/>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderInside;
