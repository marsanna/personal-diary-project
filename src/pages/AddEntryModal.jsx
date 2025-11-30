import { useOutletContext, useParams } from "react-router";

import EntryForm from "../components/EntryForm.jsx";

function AddEntryModal() {
  const { date } = useParams();
  const { cards } = useOutletContext();
  if (!cards) return <div className="text-center">Loading...</div>;
  const card = cards.find((c) => c.id === parseInt(date));
  return (
    <>
      <div>
        AddEntryModal Page
        <br />
        ---
        <br />
        <EntryForm card={date ? (card ? card : {}) : {}} />
      </div>
    </>
  );
}

export default AddEntryModal;
