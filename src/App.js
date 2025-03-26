import "./App.css";
import { Homepage } from "./Pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Preview } from "./Pages/Preview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
