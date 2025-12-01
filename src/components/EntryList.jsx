import { useOutletContext } from "react-router";

import EntryCard from "../components/EntryCard.jsx";

function EntryList() {
  const { cards } = useOutletContext();
  if (!cards) return <div>Loading...</div>;
  return (
    <>
      <div className="mx-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        {cards && cards.length > 0 ? (
          cards.map((card) => <EntryCard card={card} key={card.id} />)
        ) : (
          <div className="text-center">No entries found</div>
        )}
      </div>
    </>
  );
}

export default EntryList;
