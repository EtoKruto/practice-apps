import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Checkout from './Checkout.jsx'

let Form = ({page, handleNext, userInfo, addressInfo, ccInfo, collectForm1, collectForm2, collectForm3, sendForm}) => {
  console.log('FORM')
  console.log(userInfo)
  console.log(addressInfo)
  console.log(ccInfo)

  switch (page) {
    case 1:
    return (
    <Form1
    page={page}
    handleNext={handleNext}
    userInfo={userInfo}
    collectForm1={collectForm1}
    />
    )
    case 2:
    return (
    <Form2
    page={page}
    handleNext={handleNext}
    addressInfo={addressInfo}
    collectForm2={collectForm2}
    />
    )
    case 3:
    return (
    <Form3
    page={page}
    handleNext={handleNext}
    ccInfo={ccInfo}
    collectForm3={collectForm3}
    />
    )
    case 4:
    return (
    <Checkout
    page={page}
    handleNext={handleNext}
    userInfo={userInfo}
    addressInfo={addressInfo}
    ccInfo={ccInfo}
    sendForm={sendForm}
    />
    )
    default:
    return (
    <button onClick={()=>handleNext()}>CHECKOUT</button>
    )
  }
}


export default Form;


        // TODO: F1 collects name, email, and password for account creation.




        // TODO: F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.



        // TODO: F3 collects credit card #, expiry date, CVV, and billing zip code.