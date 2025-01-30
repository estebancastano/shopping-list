import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/SignUp";

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
    </Routes>
  </Router>
);

export default App;
