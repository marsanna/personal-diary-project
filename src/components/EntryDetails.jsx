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
    <div className="mx-auto w-3/4">
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={url}
            alt={title}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            Date: {date}
            <br />
            <br />
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-5">Content: {content}</p>
            <br />
            <Link to={`/edit/${id}`} className="hover:underline">
              Edit entry
            </Link>
            <br />
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-primary"
            >
              Delete entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntryDetails;
