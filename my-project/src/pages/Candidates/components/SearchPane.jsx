import React from 'react'
import RegionCand from './RegionCand'
import CategoryCand from './CategoryCand'

function SearchPane() {
  return (
    <div className='search-pane'>
      <form   method="get" id='searchform' className='form'>
        <RegionCand/>
        <CategoryCand/>
      </form>
    </div>
  )
}

export default SearchPane
