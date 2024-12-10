import { useEffect, useState } from "react";
import { fecthAllPuppies } from "../API";
import PuppyCard from "./PuppyCard";

const AllPuppies = () => {
  const [puppies, setPuppies] = useState([]);
  const [error, setError] = useState(null);

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
  }, []);

  return (
    <>
      <div className="all-players">
        {error && <p className="error">{error}</p>}
        {puppies.map((puppy) => {
          return <PuppyCard key={puppy.id} puppy={puppy} />;
        })}
      </div>
    </>
  );
};

export default AllPuppies;
