

let Form1 = ({page, collectForm1}) => {
  console.log(page)

  return (
    <>
    <form>
    <div>Name</div>
    <input type="text" id="name" required></input>
    <br></br>
    <div>Email</div>
    <input type="email" id="email" required></input>
    <br></br>
    <div>Password</div>
    <input type="text" id="password" required></input>
    <br></br>
    <button onClick={
      ()=>collectForm1()
    }
    >NEXT - Form1</button>
    </form>
    </>
    )
  }





  export default Form1;

