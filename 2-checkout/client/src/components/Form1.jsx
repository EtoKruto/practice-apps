

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

