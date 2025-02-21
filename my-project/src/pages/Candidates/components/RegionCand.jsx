import React from 'react'

function RegionCand() {
  return (
    <div className='page__filter-group'>
    <h4 className="page-md">Region</h4>
    <ul className="list-unstyled">
        <li><a href="1">Ukraine</a></li> {/* Link react router dom yoki navigate */}
        <li><a href="2">Poland</a></li>
        <li><a href="3">Germany</a></li>
        <li><a href="4">Spain</a></li>
        <li><a href="#">Portugal</a></li>
        <li><a href="#">Romania</a></li>
        <li><a href="#">Azerbiajan</a></li>
        <li><a href="#">EU countreis</a></li>
        <li><a href="#">Other countreis</a></li>
    </ul>
    </div>
  )
}

export default RegionCand
