import { useOutletContext } from "react-router";

import EntryCard from "../components/EntryCard.jsx";

function EntryList() {
  const { cards } = useOutletContext();
  if (!cards) return <div>Loading...</div>;
  if (cards && cards.length > 0) {
    return (
      <>
        <div className="mx-5 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <EntryCard card={card} key={card.id} />
          ))}
        </div>
      </>
    );
  } else {
    return <div className="text-center">No entries found</div>;
  }
}

export default EntryList;
