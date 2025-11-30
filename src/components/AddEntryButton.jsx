//import { useState } from "react";
import { Link } from "react-router";

function AddEntryButton() {
  //const [entry, setEntry] = useState();
  return (
    <Link to={`/add`} className="hover:underline">
      AddEntryButton
    </Link>
  );
}

export default AddEntryButton;
