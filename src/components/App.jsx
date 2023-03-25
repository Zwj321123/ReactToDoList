import React, {useState} from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [items, setItems] = useState([]);

    //when the item is clicked, it should be deleted from the list in parent component
    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    function addItem(inputText) {
        setItems(prevItems => {
            //spread operator
            //prevItems.push(inputText);
            return [...prevItems, inputText];
        });

    }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea onAdded={addItem}/>
      <div>
        <ul>
            {items.map((item, index) => (
                <ToDoItem key={index} id={index} text={item} onChecked={deleteItem}/>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
