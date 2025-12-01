import { Link } from "react-router";

function EntryCard({ card }) {
  const { id, title, date, url } = card;
  return (
    <>
      <Link to={`/view/${id}`} className="hover:underline">
        <div className="card bg-base-100 full-h border-2 border-blue-500">
          <figure>
            <img
              src={url}
              alt={title}
              className="h-48 w-full object-cover"
              width="100%"
              height="auto"
            />
          </figure>
          <div className="card-body">
            Date: {date}
            <br />
            <h2 className="card-title">{title}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}

export default EntryCard;
