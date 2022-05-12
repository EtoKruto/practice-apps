import React from 'react'

const Search = ({dictionary, handleSearch})=> (



  <div>
  <input placeholder='SEARCH' id='search-value' onChange={(e)=>handleSearch(e)}></input>
  </div>


  )




  export default Search