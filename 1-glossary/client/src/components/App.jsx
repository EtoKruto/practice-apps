import React from "react";
import { render } from "react-dom";

class App extends React.Components {
  constructor(props) {
    super(props);
    this.state = {
      // counter: 0
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {


  }


  render(
    <div>
   Hell World
    </div>
    );

    //TODO: users should see a list of previously stored words and their definitions
    //Needsa a state for the words and definitions (key/value pair) (stateful)

    // TODO: The page should also have a form by which users can add new words and definitions to the list.
    //Component for the form input (two inputs) (stateless)

    //TODO: Each entry should display a button to edit or delete the entry. You can choose how you'd like to make the content editable: a pop-up form, in-place edits, populating the existing form with the values.
    //Entry Component for the key and value pair with a delete and possibly edit button (stateless)


    // TODO: A second input should allow th user to search through the entries and filter the results as a result.
    //search component (stateful)


  }

  export default App