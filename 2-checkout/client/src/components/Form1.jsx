

let Form1 = ({page, collectForm1}) => {
  console.log(page)

  return (
    <>
    <div>Name</div>
    <input type="text" id="name"></input>
    <br></br>
    <div>Email</div>
    <input type="text" id="email"></input>
    <br></br>
    <div>Password</div>
    <input type="text" id="password"></input>
    <br></br>
    <button onClick={
      ()=>collectForm1()
    }
    >NEXT - Form1</button>
    </>
    )
  }



  // <input type="text" id="name" requiredminlength="4" maxlength="8" size="10"></input>



  export default Form1;


  // TODO: F1 collects name, email, and password for account creation.




  // TODO: F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.



  // TODO: F3 collects credit card #, expiry date, CVV, and billing zip code.