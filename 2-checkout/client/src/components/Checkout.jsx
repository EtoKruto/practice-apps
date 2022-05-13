

let Checkout = ({page, handleNext, userInfo, addressInfo, ccInfo, sendForm}) => {
  console.log(page)
  console.log(userInfo)
  console.log(addressInfo)
  console.log(ccInfo)



  return (
    <>
    <h1>CONFIRM THE BELOW INFO BEFORE HITTING BUY</h1>
    <div>NAME: {userInfo.name}</div>

    <br></br>
    <div>EMAIL: {userInfo.email}</div>

    <br></br>
    <div>PASS: {userInfo.password}</div>

    <br></br>
    <div>{`${addressInfo.line1} ${addressInfo.line2}, ${addressInfo.city}, ${addressInfo.state} ${addressInfo.zipcode}`}</div>

    <br></br>

    <br></br>
    <div>CC#: {ccInfo.ccNumber}</div>

    <br></br>
    <div>Exp Date: {ccInfo.expiryDate}</div>

    <br></br>
    <div>Zip Code: {ccInfo.zipcode}</div>
    <br></br>
    <button onClick={
      (e)=>{
        handleNext(e);
        sendForm();
      }}>BUY BUY BUY</button>
    </>
    )
  }






  export default Checkout;