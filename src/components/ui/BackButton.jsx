import { useNavigate } from "react-router-dom";
import "./BackButton.css";

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="backButton" onClick={() => navigate(-1)}>
      Back
    </button>
  );
};
