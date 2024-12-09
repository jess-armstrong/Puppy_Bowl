import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPuppies from "./components/AllPuppies";
import Search from "./components/Search";
import NewPuppyForm from "./components/NewPuppyForm";
import SinglePuppy from "./components/SinglePuppy";

function App() {
  return (
    <>
      <Search />
      <NewPuppyForm />
      <div className="all-players">
        <Routes>
          <Route path="/description" element={<SinglePuppy />} />
          <Route path="/" element={<AllPuppies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
