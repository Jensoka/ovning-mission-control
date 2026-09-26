import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Lära useState" },
    { id: 2, text: "Se re-render" },
    { id: 3, text: "Exam 2 senare" }
  ]);

  const [draft, setDraft] = useState("");
  
 /* Lägg till en demo-uppgift function addDemo() {
    setTodos([
      "Lära useState",
      "Se re-render",
      "Exam 2 senare",
      "Koda är kul!",
    ]);
  }
*/

    function clearTodos() {
    setTodos([]);
  }

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleClear() {
    setDraft("");
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") 
      return;
      setTodos([...todos, 
        { id: Date.now(), text: text }]);
      setDraft("");
}

function handleRemove(todoToRemove) {
  const kvar = todos.filter((t) => t.id !== todoToRemove);
  setTodos(kvar);
}
/*
todos.map(function(todo) {
	return <li key={todo}>{todo}</li>;
}) */



  return (
    <main>
      <h1>Övnings-todo</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <ul>

       {todos
       .filter(function (todo) {
        return todo.text
        .toLowerCase()
        .includes(draft.toLowerCase());
       })
       .map(function (todo) {
        return <li key={todo.id}>{todo.text}<button type="button" 
       onClick={function () { handleRemove(todo.id); }}>Ta bort</button></li>;
       })}
       
       </ul>
      {/*<button type="button" onClick={addDemo}>
        Lägg till rad
      </button> */}
      <input
      type= "text"
      value= {draft}
      onChange= {handleChange}
      placeholder= "Skriv uppgift..."
      />
      <p>Kladd just nu: {draft}</p>
      <button type="button" onClick={clearTodos}>
        Rensa alla
      </button>
      <button type="button" onClick={handleClear}>
        Rensa kladd
      </button>
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>
    </main>
  );
}

export default App;

