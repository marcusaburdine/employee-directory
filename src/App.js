
import { Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage";
import Employee from "./pages/EmployeeInfo";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee/:employeeID" element={<Employee />} />
      </Routes>
    </div>
  );
}

export default App;
