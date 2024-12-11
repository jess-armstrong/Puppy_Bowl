import { useEffect, useState } from "react";
import { fecthAllPuppies } from "../API";
import PuppyCard from "./PuppyCard";
import NewPuppyForm from "./NewPuppyForm";

const AllPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState("");

  useEffect(() => {
    async function getAllPuppies() {
      const APIResponse = await fecthAllPuppies();
      if (APIResponse.success) {
        setPuppies(APIResponse.data.players);
      } else {
        setError(APIResponse.error.message);
      }
    }
    getAllPuppies();
  }, [update]);

  const displayPuppies = search
    ? puppies.filter((puppy) => puppy.name.toLowerCase().includes(search))
    : puppies;

  return (
    <>
      <label htmlFor="">
        Search:{" "}
        <input
          type="text"
          placeholder="Search for a puppy"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </label>
      <NewPuppyForm />

      <div className="all-players">
        {error && <p className="error">{error}</p>}
        {displayPuppies.map((puppy) => {
          return <PuppyCard key={puppy.id} puppy={puppy} />;
        })}
      </div>
    </>
  );
};

export default AllPuppies;
