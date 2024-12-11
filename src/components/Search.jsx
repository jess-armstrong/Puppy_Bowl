import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <>
      <label htmlFor="">
        Search:{" "}
        <input
          type="text"
          placeholder="Search for a puppy"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </>
  );
};

export default Search;
