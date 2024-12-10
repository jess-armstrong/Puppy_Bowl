import { Routes, Route } from "react-router-dom";
import "./App.css";
import AllPuppies from "./components/AllPuppies";
import Search from "./components/Search";
import NewPuppyForm from "./components/NewPuppyForm";
import SinglePuppy from "./components/SinglePuppy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:id" element={<SinglePuppy />} />
        <Route
          path="/"
          element={
            <>
              <Search />
              <NewPuppyForm />
              <AllPuppies />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
