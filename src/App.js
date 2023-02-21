import { useState } from "react";
import ToDoLists from "./components/ToDoLists";

function App() {

  const [inputList, setInputList] = useState("")
  const [Items, setItems] = useState([])

  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    // console.log("Items delete");

    setItems((oldItems) => {
      return oldItems.filter((arrElement, index) => {
        return index !== id;
      })
    })

  }

  return (
    <>
      <div className="mainDiv">
        <div className="centerDiv">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value = {inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>

          <ol>

            {Items.map((itemValue, index) => {
              return <ToDoLists key={index} id={index} text = {itemValue} onSelect={deleteItems}/>
            })}            

          </ol>

        </div>
      </div>
    </>
  );
}

export default App;
