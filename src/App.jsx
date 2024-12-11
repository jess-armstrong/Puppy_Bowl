import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPuppies from "./components/AllPuppies";
import SinglePuppy from "./components/SinglePuppy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<SinglePuppy />} />
        <Route path="/" element={<AllPuppies />} />
      </Routes>
    </>
  );
}

export default App;
