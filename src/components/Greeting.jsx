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
    const name = e.target.elements.name.value.replace(/<[^>]*>/g, "");
    setDiaryName(name);
    localStorage.setItem("diary-name", JSON.stringify(name));
    button.disabled = false;
  };
  if (diaryName !== "") {
    return <div>Hello, {diaryName}! How's your day?</div>;
  } else {
    return (
      <form
        method="get"
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 md:flex-row"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Name*
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="What's your name?"
          />
        </div>
        <button name="submit" type="submit" className="btn cursor-pointer">
          Submit
        </button>
      </form>
    );
  }
}

export default Greeting;
