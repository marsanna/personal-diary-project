import { useEffect, useState } from "react";

function Greeting() {
  const [diaryName, setDiaryName] = useState("");
  useEffect(() => {
    const getName = async () => {
      const diaryName = JSON.parse(localStorage.getItem("diary-name")) ?? "";
      setDiaryName(diaryName);
    };
    getName();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const button = e.target["submit"];
    button.disabled = true;
    const name = e.target.elements.name.value
      .replace(/<[^>]*>/g, "")
      .replace(/[^\w\s.,:;!?/-]/g, "");
    setDiaryName(name);
    localStorage.setItem("diary-name", JSON.stringify(name));
    button.disabled = false;
  };
  if (diaryName !== "") {
    return <div>Hello, {diaryName}!</div>;
  } else {
    return (
      <form method="get" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block">
            Name*
          </label>
          <input type="text" name="name" id="name" className="input" />
        </div>
        <br />
        <button name="submit" type="submit" className="btn cursor-pointer">
          Submit
        </button>
      </form>
    );
  }
}

export default Greeting;
