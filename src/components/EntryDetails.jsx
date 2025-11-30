import { Link } from "react-router";
import { useNavigate, useOutletContext } from "react-router";

function EntryDetails({ card }) {
  const navigate = useNavigate();
  const { id, title, date, url, content } = card;
  const { cards, updateCards } = useOutletContext();
  function handleClick() {
    let newCards;
    newCards = cards.filter((item) => item.id !== id);
    navigate("/");
    updateCards(newCards);
  }
  return (
    <>
      EntryDetails
      <br />
      ---
      <br />
      <div>Image URL: {url}</div>
      <div>Date: {date}</div>
      <div>Title: {title}</div>
      <div>Content: {content}</div>
      <br />
      ---
      <br />
      <Link to={`/edit/${id}`} className="hover:underline">
        EditButton
      </Link>
      <br />
      ---
      <br />
      <button type="button" onClick={handleClick}>
        DeleteButton
      </button>
    </>
  );
}

export default EntryDetails;
