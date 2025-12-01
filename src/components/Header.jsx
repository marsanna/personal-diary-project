import { Link } from "react-router";

import AddEntryButton from "./AddEntryButton.jsx";
import Greeting from "./Greeting.jsx";

function Header() {
  return (
    <header className="sticky top-0 z-100 mb-5 flex flex-col items-center justify-center bg-blue-500 p-5 text-blue-950 md:flex-row md:justify-between">
      <nav className="flex flex-col items-center gap-2 md:flex-row">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <AddEntryButton />
      </nav>
      <Greeting />
    </header>
  );
}

export default Header;
