import { useOutletContext, useParams } from "react-router";

import EntryDetails from "../components/EntryDetails.jsx";

function ViewEntryModal() {
  const { date } = useParams();
  const { cards } = useOutletContext();
  if (!cards) return <div className="text-center">Loading...</div>;
  const card = cards.find((c) => c.id === parseInt(date));
  return (
    <>
      <h1 className="mb-2 text-lg font-bold">Entry details</h1>
      <EntryDetails card={card ?? {}} />
    </>
  );
}

export default ViewEntryModal;
