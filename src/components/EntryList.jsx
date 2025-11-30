import { useOutletContext } from "react-router";

import EntryCard from "../components/EntryCard.jsx";

function EntryList() {
  const { cards } = useOutletContext();
  if (!cards) return <div>Loading...</div>;
  return (
    <>
      <div>
        EntryList:
        <br />
        {cards && cards.length > 0 ? (
          cards.map((card) => <EntryCard card={card} key={card.id} />)
        ) : (
          <div>No entries found</div>
        )}
      </div>
    </>
  );
}

export default EntryList;
