/*import logo from './logo.svg';*/
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Tables from './component/Tables';
import Forms from "./component/Forms";
import ToDoList from "./component/ToDoList";
import Api from "./component/Api";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
