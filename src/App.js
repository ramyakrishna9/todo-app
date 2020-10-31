import React, { useState,useEffect } from 'react';
import  { Button, InputLabel, FormControl, Input } from '@material-ui/core';
import './App.css';
import Todo from "./Todo";
import { db } from './firebase';
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput]= useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy("timestamp", "desc").onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc =>({id: doc.id, todo: doc.data().todo})))
    })
  }, []);

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault();

    db.collection('todos').add ({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('');
  }
  return (
    <div className="App">
     <h1> I am a ToDo app list </h1>
     <form>
      

      <FormControl>
        <InputLabel>: ✔️ Write a Todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          enter todays ToDo
      </Button>
      
     </form>
      <ul>
        {todos.map(todo => (
          <Todo  todo={todo}/>
          //<li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
