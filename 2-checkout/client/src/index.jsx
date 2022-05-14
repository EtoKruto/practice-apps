import React from "react";
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx'
const axios = require('axios').default;
const valid = require("card-validator");


let checkIfFilled = function () {
  let filledArray = [];
  let inputArray = document.getElementsByTagName("input")

  for(let input of inputArray ) {
    // if (input.id === 'ccNumber') {
    //   var numberValidation = valid.number(input.value);
    //   console.log(numberValidation);
    //   // input.setAttribute('placeholder', 'FILL THIS OUT');
    //   filledArray.push(true)
    // }

    if(input.value.length < 1) {
      if (input.id !== 'line2') {
        input.setAttribute('placeholder', 'FILL THIS OUT');
        filledArray.push(true)
      } else {
        input.setAttribute('placeholder', 'this one is optional');
      }
    }
  }
  return filledArray;
}



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
    this.formatCreditCard = this.formatCreditCard.bind(this)
  }

  componentDidMount () {
    axios.get('/form')
    .then(()=> {
      console.log('DidMountSQL')
    })
    .catch(()=> {
      console.log('catch')
    })
  }


  formatCreditCard(id, atLength, max, symbol) {
    var x = document.getElementById(id);
    var index = x.value.lastIndexOf(symbol);
    var test = x.value.substr(index + 1);

    if (test.length === atLength && x.value.length < max)
    x.value = x.value + symbol;
  };

  sendForm (e) {
    let userInfo = this.state.userInfo;
    let addressInfo = this.state.addressInfo;
    let ccInfo = this.state.ccInfo;

    let allInfo = {
      userInfo,
      addressInfo,
      ccInfo
    }

    console.log(allInfo);

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

    if (checkIfFilled().length < 1){
      this.handleNext ();
    }


  };

  collectForm2() {

    let line1 = document.getElementById("line1").value;
    let line2 = document.getElementById("line2").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zipCode = document.getElementById("zipCode").value;



    this.setState({
      addressInfo: {
        line1: line1,
        line2: line2,
        city: city,
        state: state,
        zipCode: zipCode
      }
    })

    if (checkIfFilled().length < 1){
      this.handleNext ();
    }
  };

  collectForm3() {

    let ccNumber = document.getElementById("ccNumber").value;
    let expiryDate = document.getElementById("expiryDate").value;
    let zipCodeCC = document.getElementById("zipCodeCC").value;

    ccNumber = ccNumber.split('-').join('')

    this.setState({
      ccInfo: {
        ccNumber: ccNumber,
        expiryDate: expiryDate,
        zipCodeCC: zipCodeCC
      }
    })


    if (checkIfFilled().length < 1){
      this.handleNext ();
    }
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
      formatCreditCard={this.formatCreditCard}
      />
      </div>
      )
    }


  }


  ReactDOM.render(<App />, document.getElementById("root"));

