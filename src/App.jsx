import "./App.css";
import PuppyList from "./components/PuppyList";
import Search from "./components/Search";
import NewPuppyForm from "./components/NewPuppyForm";

function App() {
  return (
    <>
      <Search />
      <NewPuppyForm />
      <PuppyList />
    </>
  );
}

export default App;
