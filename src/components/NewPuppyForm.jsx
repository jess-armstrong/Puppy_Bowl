import { useState } from "react";
import { addNewPuppy } from "../API";
import PuppyCard from "./PuppyCard";

const NewPuppyForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [newPuppy, setNewPuppy] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await addNewPuppy(name, breed, imageUrl);
      console.log(response.data.newPlayer);
      setNewPuppy(response.data.newPlayer);
      console.log(newPuppy);
    } catch (error) {
      console.error(error);
    }

    setName("");
    setBreed("");
    setImageUrl("");
  }

  return (
    <>
      <br />
      <button
        onClick={() => {
          setShowForm(true);
        }}
      >
        Enter new Puppy
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:{" "}
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Breed:{" "}
            <input
              type="text"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </label>
          <br />
          <label>
            Image URL:{" "}
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};

export default NewPuppyForm;
