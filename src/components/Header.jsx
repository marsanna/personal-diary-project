import { Link } from "react-router";

import AddEntryButton from "./AddEntryButton.jsx";
import Greeting from "./Greeting.jsx";

function Header() {
  return (
    <header>
      <Greeting />
      <nav>
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <br />
        <AddEntryButton />
      </nav>
    </header>
  );
}

export default Header;
