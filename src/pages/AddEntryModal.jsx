import { useOutletContext, useParams } from "react-router";

import EntryForm from "../components/EntryForm.jsx";

function AddEntryModal() {
  const { date } = useParams();
  const { cards } = useOutletContext();
  if (!cards) return <div className="text-center">Loading...</div>;
  const card = cards.find((c) => c.id === parseInt(date));
  return (
    <>
      <h1 className="mb-2 text-lg font-bold">Add new entry</h1>
      <EntryForm card={date ? (card ? card : {}) : {}} />
    </>
  );
}

export default AddEntryModal;
