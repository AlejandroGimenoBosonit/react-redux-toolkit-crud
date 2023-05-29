import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { TaskForm } from "./components";
import { TaskListPage } from "./app/pages/index";
import NavbarComponent from "./components/NavbarComponent/NavbarComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
