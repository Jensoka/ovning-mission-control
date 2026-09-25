import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Exam 2 senare",
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
      setTodos([...todos, text]);
      setDraft("");
}

function handleRemove(textToRemove) {
  const kvar = todos.filter((t) => t !== textToRemove);
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
        
       {todos.map((t) => (
       <li key={t}>{t}
       <button type="button" 
       onClick={function () { handleRemove(t); }}>Ta bort</button></li>
       ))}
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