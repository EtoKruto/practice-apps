

let Checkout = ({page, handleNext, userInfo, addressInfo, ccInfo, sendForm}) => {
  console.log(page)
  console.log(userInfo)
  console.log(addressInfo)
  console.log(ccInfo)



  return (
    <>
    <h2>CONFIRM INFO BELOW INFO BEFORE HITTING BUY</h2>
    <div>NAME: {userInfo.name}</div>

    <br></br>
    <div>EMAIL: {userInfo.email}</div>

    <br></br>
    <div>PASS: {userInfo.password}</div>

    <br></br>
    <div>{`${addressInfo.line1} ${addressInfo.line2}, ${addressInfo.city}, ${addressInfo.state} ${addressInfo.zipCode}`}</div>

    <br></br>

    <br></br>
    <div>CC#: {ccInfo.ccNumber}</div>

    <br></br>
    <div>Exp Date: {ccInfo.expiryDate}</div>

    <br></br>
    <div>Zip Code: {ccInfo.zipCodeCC}</div>
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