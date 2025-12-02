import { useEffect, useState } from "react";
import { Outlet } from "react-router";

import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { Diary, loadStorage, writeStorage } from "../data/storage.js";

export default function MainLayout() {
  const [cards, setCards] = useState();
  const updateCards = (newCards) => {
    setCards(newCards);
    writeStorage(newCards);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = loadStorage();
      setCards(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="mb-10 flex max-w-[1440px] flex-grow flex-col items-center">
        <Outlet context={{ cards, updateCards }} />
      </main>
      <Footer />
    </>
  );
}
