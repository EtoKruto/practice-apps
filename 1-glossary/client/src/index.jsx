
import React from "react";
import { render } from "react-dom";
import List from "./components/List.jsx";
import Search from "./components/Search.jsx";
import Form from "./components/Form.jsx";
var _ = require('underscore')
let axios = require('axios')


// let axiosMethod = (method, url, data)=> {
//   axios[method](url)
//   .then((response)=> {
//     console.log('data in component', response.data)
//     this.setState({
//       dictionary: response.data
//     })
//   })
//   .catch((err)=> {
//     console.log(err)
//   })
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dictionary: [
        // {name: 'ataraxia', def: 'state of freedom from emotional disturbance and anxiety'},
      ],
      tempDictionary: []

      // searchedList: [
      //   {name: 'ataraxia', def: 'state of freedom from emotional disturbance and anxiety'},
      //   {name: 'yakka', def: 'work, especially hard work'},
      //   {name: 'aver', def: 'assert or affirm with confidence'}
      // ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    //TODO: get axios function at startup to get all values in database
    axios.get('/dictionary')
    .then((response)=> {
      console.log('data in component', response)
      this.setState({
        dictionary: response.data,
        tempDictionary: response.data
      })
    })
    .catch((err)=> {
      console.log(err)

    })
  }

  postNewEntry(keyDefObj) {
    //TODO: get axios function at startup to get all values in database

    console.log(keyDefObj)
    axios.post('/dictionary', keyDefObj)
    .then(()=> {
      axios.get('/dictionary')
      .then((response)=> {
        console.log('data in component', response)
        this.setState({
          dictionary: response.data,
          tempDictionary: response.data
        })
      })
      .catch((err)=> {
        console.log(err)

      })
    })
  }

  handleSearch (e) {
    // console.log(document.getElementById('search-value').value);
    console.log(e.target.value);
    if (e.target.value.length === 0) {
      // axios.get('/dictionary')
      // .then((response)=> {
      //   console.log('data in component', response.data)

      // })
      // .catch((err)=> {
      //   console.log(err)
      // })
      this.setState({
        dictionary: this.state.tempDictionary
      })
    } else {
      let searchedList = this.state.tempDictionary
      let foundList = [];
      for (let object of searchedList) {
        let strObj = JSON.stringify(object.name)+ JSON.stringify(object.def)

        console.log(strObj)
        if(strObj.includes(e.target.value)) {
          foundList.push(object)
        }
        // if (Object.values(object).includes(e.target.value) > -1) {
        // }
      }

      this.setState({
        dictionary: foundList
      })
    }



  }

  handleDelete (entryClicked) {
    //TODO: function to handle delete button on entrees
    console.log('DELETE STARTED', entryClicked)
    axios.post('/dictionary/delete', entryClicked)
    .then(()=> {
      axios.get('/dictionary')
      .then((response)=> {
        console.log('data in component', response)
        this.setState({
          dictionary: response.data,
          tempDictionary: response.data
        })
      })
      .catch((err)=> {
        console.log(err)

      })
    })
  }

  handleEdit (entryClicked) {
    //TODO: function to handle delete button on entrees
    console.log('EDIT STARTED')
    document.getElementById('form-submit-key').value = entryClicked.name;
    let def = document.getElementById('form-submit-def').value = entryClicked.def;

    // axios.post('/dictionary/edit', entryClicked)
    // .then(()=> {
    //   axios.get('/dictionary')
    //   .then((response)=> {
    //     console.log('data in component', response)
    //     this.setState({
    //       dictionary: response.data,
    //       tempDictionary: response.data
    //     })
    //   })
    //   .catch((err)=> {
    //     console.log(err)

    //   })
    // })

  }

  handleSubmit (e) {
    //TODO: function to handle delete button on entrees

    e.preventDefault();
    let key = document.getElementById('form-submit-key').value;
    let def = document.getElementById('form-submit-def').value;
    if (def === '' && key === '') {
      alert('Missing Key and Definition')
    } else if(key === '') {
      alert('Missing Key')
    } else if (def === ''){
      alert('Missing Definition')
    } else {
      this.postNewEntry({name: key, def: def})
      document.getElementById('form-submit-key').value = '';
      document.getElementById('form-submit-def').value = '';

    }
  }

  render() {
    return (
      <div>
      WORDLE???
      <Form handleSubmit={this.handleSubmit}/>

      <Search
      dictionary={this.state.dictionary}
      // searchedList={this.state.searchedList}
      handleSearch={this.handleSearch}/>

      <List
      dictionary={this.state.dictionary}
      handleDelete={this.handleDelete}
      handleEdit={this.handleEdit}/>
      </div>
      )
    }

    //TODO: get axios function at startup to get all values in database

    //  {/* LIST previously stored words and their definitions
    //     /* //TODO: users should see a list of previously stored words and their definitions
  //   //Needsa a state for the words and definitions (key/value pair) (stateful) */}
  // TODO: The page should also have a form by which users can add new words and definitions to the list.
  //Component for the form input (two inputs) (stateless)

  //TODO: Each entry should display a button to edit or delete the entry. You can choose how you'd like to make the content editable: a pop-up form, in-place edits, populating the existing form with the values.
  //Entry Component for the key and value pair with a delete and possibly edit button (stateless)


  // TODO: A second input should allow th user to search through the entries and filter the results as a result.
  //search component (stateful)


}

render(<App />, document.getElementById('root'))
