import { Link } from "react-router";

function AddEntryButton() {
  return (
    <Link to={`/add`} className="hover:underline">
      Add new entry
    </Link>
  );
}

export default AddEntryButton;
