import { BrowserRouter, Route, Routes } from "react-router";

import "./App.css";
import MainLayout from "./layouts/MainLayout.jsx";
import AddEntryModal from "./pages/AddEntryModal.jsx";
import EntryListPage from "./pages/EntryListPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ViewEntryModal from "./pages/ViewEntryModal.jsx";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<EntryListPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="view/:date" element={<ViewEntryModal />} />
            <Route path="edit/:date" element={<AddEntryModal />} />
            <Route path="add" element={<AddEntryModal />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
