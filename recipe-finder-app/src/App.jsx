import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MealPage from "./Pages/MealPage";
import NotFound from "./Pages/NotFound";
import Search from "./Components/Search";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
