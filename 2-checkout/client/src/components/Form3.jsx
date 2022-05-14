

let Form3 = ({page, handleNext, collectForm3, formatCreditCard}) => {
  console.log(page)


  return (
    <>
    <form>
    <div>Credit Card Number</div>
    <input type="text" id="ccNumber" maxLength='19'  onKeyUp={()=>formatCreditCard('ccNumber', 4, 17, '-')} required></input>
    <br></br>
    <div>Expiration Date</div>
    <input type="text" id="expiryDate" onKeyUp={()=>formatCreditCard('expiryDate', 2, 3, '/')} maxLength='7' required></input>
    <br></br>
    <div>Zip Code</div>
    <input type="text" id="zipCodeCC" maxLength='5' required></input>
    <br></br>
    <button onClick={
      ()=>collectForm3()
    }
    >NEXT - Form3</button>
    </form>
    </>
    )
  }




  export default Form3;



  // TODO: F1 collects name, email, and password for account creation.




  // TODO: F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.



  // TODO: F3 collects credit card #, expiry date, CVV, and billing zip code.