import React from 'react'

class Search extends React.Component {
  constructor(dictionary) {
    super(dictionary);
    this.state = {
      searchTerm: ''
    };
    this.handleSearch = this.handleSearch.bind(this);
    // this.searchKeyDefFunc = this.searchKeyDefFunc.bind(this);

  }

  handleSearch (e) {
    console.log(document.getElementById('search-value').value);
    console.log(e.target.value);

    //TODO: function to handle delete button on entrees

  }



  render () {
    return (

      <div>
      <input placeholder='SEARCH' id='search-value' onKeyUp={(e)=>this.handleSearch(e)}></input>

      </div>



      )
    }


  }




  export default Search