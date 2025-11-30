import { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router";

function EntryForm({ card }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: card.id ?? "",
    url: card.url ?? "",
    date: card.date ?? "",
    title: card.title ?? "",
    content: card.content ?? "",
  });
  useEffect(() => {
    if (card && Object.keys(card).length == 0) {
      const resetForm = async () => {
        setFormData({
          id: "",
          url: "",
          date: "",
          title: "",
          content: "",
        });
      };
      resetForm();
    }
  }, [card]);
  const [validFields, setValidFields] = useState({
    url: true,
    date: true,
    title: true,
    content: true,
  });
  const { cards, updateCards } = useOutletContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target["submit"];
    button.disabled = true;
    const valid = validateFields(formData);
    if (!valid) {
      alert("Please fill all fields correctly!");
    } else {
      if (
        formData.id === "" &&
        cards.some((item) => item.date === formData.date) === true
      ) {
        alert("Date is not correctly!");
      } else {
        setTimeout(() => {
          e.target.reset();
          alert("Form submitted 🎉");
          const data = {
            ...formData,
            id: formData.id !== "" ? formData.id : Date.now(),
          };
          let newCards;
          if (card?.id) {
            newCards = cards.map((item) => (item.id === card.id ? data : item));
            navigate(`/view/${card.id}`);
          } else {
            newCards = [data, ...cards];
            navigate("/");
          }
          updateCards(newCards);
        }, 1000);
      }
      button.disabled = false;
    }
  };
  let fieldValidity = {};
  const validateFields = (data) => {
    let isValid = true;
    fieldValidity.url = data.url.trim().length > 0;
    if (!fieldValidity.url) isValid = false;
    fieldValidity.date = data.date.trim().length > 0;
    if (!fieldValidity.date) isValid = false;
    fieldValidity.title = data.title.trim().length > 0;
    if (!fieldValidity.title) isValid = false;
    fieldValidity.content = data.content.trim().length > 0;
    if (!fieldValidity.content) isValid = false;
    setValidFields(fieldValidity);
    return isValid;
  };
  const validateField = (name, value) => {
    switch (name) {
      case "url":
        return value.trim().length > 0;
      case "date":
        return value.trim().length > 0;
      case "title":
        return value.trim().length > 0;
      case "content":
        return value.trim().length > 0;
      default:
        return true;
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = value
      .replace(/<[^>]*>/g, "")
      .replace(/[^\w\s.,:;!?/-]/g, "");
    setFormData({
      ...formData,
      [name]: newValue,
    });
    const isValid = validateField(name, newValue);
    setValidFields({
      ...validFields,
      [name]: isValid,
    });
  };
  return (
    <div>
      <form method="get" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block">
            Title*
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className={`input ${!validFields.title ? "border-red-500" : ""}`}
          />
        </div>
        <br />
        <div>
          <label htmlFor="date" className="block">
            Date*
          </label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            readOnly={formData.id !== "" ? true : false}
            className={`input ${!validFields.date ? "border-red-500" : ""}`}
          />
        </div>
        <br />
        <div>
          <label htmlFor="url" className="block">
            Image URL*
          </label>
          <input
            type="text"
            name="url"
            id="url"
            value={formData.url}
            onChange={handleChange}
            className={`input ${!validFields.url ? "border-red-500" : ""}`}
          />
        </div>
        <br />
        <div>
          <label htmlFor="content" className="block">
            Content*
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            className={`textarea h-24 ${!validFields.content ? "border-red-500" : ""}`}
          ></textarea>
        </div>
        <br />
        <button name="submit" type="submit" className="btn cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EntryForm;
