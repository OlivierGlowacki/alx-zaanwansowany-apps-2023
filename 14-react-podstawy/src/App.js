import './App.css';

const Footer = () => {

  const name = "Olivier"
  return (
    <footer>
      Hello {name}
    </footer>
  )
}

const List = () => {

  const todos = [
  {
    id: 1,
    name: "Jest fajnie"
  },
  {
    id: 2,
    name: "Kurs ALX jest spoko"
  }
]

return(
  <div>
    {todos.map(todo => 
      <div key={todo.id}>
        {todo.name}
      </div>
    )}
  </div>
)
}

function App() {
  return (
    <div className="App">
      <Footer></Footer>
      <List></List>
    </div>
  );
}

export default App;
