import "./App.css";
import Main from "./Components/Main/Main";
import Logout from "./Components/Common Components/Logout/Logout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;
