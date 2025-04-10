import React from 'react'

function EngilishLevel() {
  return (
    <div className='page__filter-group'>
        <h4 className="page-md">
        English level
        </h4>
     <ul className="list-unstyled">
        <li><a href="#">No English</a></li>
        <li><a href="#">Beginner/Elementary</a></li>
        <li><a href="#">Pre-Intermediate</a></li>
        <li><a href="#">Intermediate</a></li>
        <li><a href="#">Upper-Intermediate</a></li>
        <li><a href="#">Advanced/Fluent</a></li>
     </ul>
     <div className="speekSuK">
     <h4 className="page-md">
     Speaks Ukrainian
    </h4>
    <ul className="list-unstyled">
        <li><a href="#">Yes</a></li>
        <li><a href="#">No</a></li>
     </ul>
    </div>     
    </div>
  )
}

export default EngilishLevel;

