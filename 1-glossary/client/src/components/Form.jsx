
const Form = ({dictionary, handleSubmit}) =>(
  <div className="list">

  <form>
  <label>Enter a name : </label>
  <input type="text" id='form-submit-key' placeholder="write the name here"></input>
  <label>... and a definition : </label>
  <input type="text" id='form-submit-def' placeholder="write the definition here"></input>
  <button type="submit" className='button' onClick={(e)=>handleSubmit(e)}> SUBMIT </button>
  </form>
  </div>

  )



  export default Form