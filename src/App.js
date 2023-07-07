import './App.css';
import Navbar from './components/Navbar';
import TodoPage from './components/TodoPage';



export const metadata = {
  title: 'Todo List',
  description: 'Create and save Your Daily Tasks',
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <TodoPage />
      </header>
    </div>
  );
}

export default App;
