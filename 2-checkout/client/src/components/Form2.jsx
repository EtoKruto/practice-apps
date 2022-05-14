

let Form2 = ({page, handleNext, collectForm2}) => {
  console.log(page)

  return (
    <>
    <form>
    <div>Line 1</div>
    <input type="text" id="line1" required></input>
    <br></br>
    <div>Line 2 (Apt/Number)</div>
    <input type="text" id="line2"></input>
    <br></br>
    <div>City</div>
    <input type="text" id="city" required></input>
    <br></br>
    <div>State</div>
    <input type="text" id="state" maxLength='2' required></input>
    <br></br>
    <div>Zipcode</div>
    <input type="text" id="zipCode" maxLength='5' required></input>
    <br></br>
    <button onClick={
      ()=>collectForm2()
    }
    >NEXT - Form2</button>
    </form>
    </>
    )}



    export default Form2;





