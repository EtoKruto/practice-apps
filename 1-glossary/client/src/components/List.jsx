import Entry from "./Entry.jsx";

function List ({dictionary, searchedList, handleDelete, handleEdit}) {

  // {
  //   // let searchedList = searchedList;
  //   console.log(searchedList)
  // };
  // if(searchedList.length === 0) {
    return (
      <div className="list">
      {

        dictionary.map(entry=> {
          return (
            <Entry  entry={entry} key={entry._id} handleDelete={handleDelete}
            handleEdit={handleEdit}
            />
            )
          })
        }
        </div>
        )
    }




    export default List