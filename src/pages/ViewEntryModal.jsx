import { useOutletContext, useParams } from "react-router";

import EntryDetails from "../components/EntryDetails.jsx";

function ViewEntryModal() {
  const { date } = useParams();
  const { cards } = useOutletContext();
  if (!cards) return <div className="text-center">Loading...</div>;
  const card = cards.find((c) => c.id === parseInt(date));
  return (
    <>
      <div>
        ViewEntryModal Page
        <br />
        ---
        <br />
        <EntryDetails card={card ?? {}} />
      </div>
    </>
  );
}

export default ViewEntryModal;
