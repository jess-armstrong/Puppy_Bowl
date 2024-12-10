import { useParams, useNavigate } from "react-router-dom";
import { fetchSinglePuppy } from "../API";
import { useState, useEffect } from "react";

const SinglePuppy = () => {
  const [puppy, setPuppy] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function getPuppy(id) {
      const APIResponse = await fetchSinglePuppy(id);
      setPuppy(APIResponse);
    }
    getPuppy(id);
  }, []);

  return (
    <>
      {puppy && (
        <>
          <h1>{puppy.name}</h1>
          <p>
            <em>
              <b>ID:</b> {puppy.id}
            </em>
          </p>
          <p className="details">
            <b>Breed:</b> {puppy.breed} <br />
            <b>Status:</b> {puppy.status} <br />
            <b>Cohort ID:</b> {puppy.cohortId}
          </p>
          <img src={puppy.imageUrl} alt={puppy.name} />
          <br />
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
        </>
      )}
    </>
  );
};

export default SinglePuppy;
