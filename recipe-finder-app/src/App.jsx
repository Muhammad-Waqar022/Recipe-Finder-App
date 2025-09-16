import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MealPage from "./Pages/MealPage";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import FavMeals from "./Pages/FavMeals";
import { ThemeProvider } from "./Context/ThemeContext";
import Footer from "./Components/Footer";

function App() {
  const [favourite, setFavourite] =useState([]);
  
  const handleFav = (meal) => {
  let newFav;
  if (!favourite.some(m => m.idMeal === meal.idMeal)) {
    newFav = [...favourite, meal];
  } else {
    newFav = favourite.filter(m => m.idMeal !== meal.idMeal);
  }
  setFavourite(newFav);
  localStorage.setItem("favouriteMeals", JSON.stringify(newFav));
};

useEffect(() => {
  const savedFav = localStorage.getItem("favouriteMeals");
  if (savedFav) {
    setFavourite(JSON.parse(savedFav));
  }
}, []);
  return (
    <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home favourite={favourite} handleFav={handleFav} />} />
          <Route path="/favmeals" element={<FavMeals favourite={favourite} handleFav={handleFav}/>} />
          <Route path="/meal/:id" element={<MealPage favourite={favourite} handleFav={handleFav} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
