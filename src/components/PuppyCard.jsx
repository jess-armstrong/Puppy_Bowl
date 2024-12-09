import { useNavigate } from "react-router-dom";
const PuppyCard = ({ puppy }) => {
  const navigate = useNavigate();
  return (
    <div className="player-card">
      <h2>{puppy.name}</h2>
      <p>Breed: {puppy.breed}</p>
      <img src={puppy.imageUrl} alt={puppy.name} />

      <button
        onClick={() => {
          navigate("/description");
        }}
      >
        See More Details
      </button>
      <button
        onClick={() => {
          console.log("delete");
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PuppyCard;
