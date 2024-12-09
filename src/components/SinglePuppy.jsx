import { useNavigate } from "react-router-dom";
const SinglePuppy = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Single Puppy</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </>
  );
};

export default SinglePuppy;
