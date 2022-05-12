
function Entry({entry, handleDelete, handleEdit}) {
  return (
    <div className="entry-class">
    <span className='class-entries'><b>{entry.name}</b>  -</span>
    <span className='class-entries'>{entry.def}</span>
    <button onClick={()=>handleEdit(entry)}>EDIT</button>
    <button onClick={()=>handleDelete(entry)}>DELETE</button>
    {/* <div>ENTREE + have a button (edit or delete)</div> */}

    </div>
    );
  }



  export default Entry