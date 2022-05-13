import React from "react";
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx'
// import Checkout from './components/Checkout.jsx'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 0,
      userInfo: {},
      addressInfo: {},
      ccInfo: {},
    }
    this.handleNext = this.handleNext.bind(this)
    this.collectForm1 = this.collectForm1.bind(this)
    this.collectForm2 = this.collectForm2.bind(this)
    this.collectForm3 = this.collectForm3.bind(this)
    this.sendForm = this.sendForm.bind(this)

  }

  componentDidMount () {
  }

  sendForm () {
    let userInfo = this.state.userInfo;
    let addressInfo = this.state.addressInfo;
    let ccInfo = this.state.ccInfo;

    let allInfo = {
      userInfo,
      addressInfo,
      ccInfo
    }

    axios.post('/form', allInfo)
    .then(()=> {
      console.log('then')
    })
    .catch(()=> {
      console.log('catch')
    })


  }

  collectForm1() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    this.setState({
      userInfo: {
        name: name,
        email: email,
        password: password
      }
    })
    this.handleNext ();
  };

  collectForm2() {

    let line1 = document.getElementById("line1").value;
    let line2 = document.getElementById("line2").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zipcode = document.getElementById("zipcode").value;



    this.setState({
      addressInfo: {
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        zipcode: zipcode
      }
    })

    this.handleNext ();
  };

  collectForm3() {

    let ccNumber = document.getElementById("ccNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let zipCode = document.getElementById("zipCode").value;

    this.setState({
      ccInfo: {
        ccNumber: ccNumber,
        expiryDate: expiryDate,
        zipCode: zipCode
      }
    })
    this.handleNext ();
  };

  handleNext () {
    console.log(this.state.page);

    if (this.state.page < 4) {
      this.setState({page: this.state.page + 1});
    } else {
      this.setState({page: 0});
    }
  }


  render() {
    return(
      <div>
      <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      <br></br>
      <br></br>
      <Form
      page={this.state.page}
      userInfo={this.state.userInfo}
      addressInfo={this.state.addressInfo}
      ccInfo={this.state.ccInfo}
      handleNext={this.handleNext}
      collectForm1={this.collectForm1}
      collectForm2={this.collectForm2}
      collectForm3={this.collectForm3}
      sendForm={this.sendForm}
      />
      </div>
      )
    }


  }


  ReactDOM.render(<App />, document.getElementById("root"));

