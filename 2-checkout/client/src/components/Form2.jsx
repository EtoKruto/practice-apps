

let Form2 = ({page, handleNext, collectForm2}) => {
  console.log(page)

  return (
    <>
    <div>Line 1</div>
    <input type="text" id="line1"></input>
    <br></br>
    <div>Line 2 (Apt/Number)</div>
    <input type="text" id="line2"></input>
    <br></br>
    <div>City</div>
    <input type="text" id="city"></input>
    <br></br>
    <div>State</div>
    <input type="text" id="state"></input>
    <br></br>
    <div>Zipcode</div>
    <input type="text" id="zipcode"></input>
    <br></br>
    <button onClick={
      ()=>collectForm2()
    }
    >NEXT - Form2</button>
    </>
    )}



    export default Form2;


    // TODO: F1 collects name, email, and password for account creation.




    // TODO: F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.



    // TODO: F3 collects credit card #, expiry date, CVV, and billing zip code.