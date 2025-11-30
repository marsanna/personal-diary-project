import { Link } from "react-router";

function EntryCard({ card }) {
  const { id, title, date, url } = card;
  return (
    <>
      <br />
      ---
      <br />
      EntryCard
      <Link to={`/view/${id}`} className="hover:underline">
        <div>{url}</div>
        <div>{date}</div>
        <div>{title}</div>
      </Link>
    </>
  );
}

export default EntryCard;
