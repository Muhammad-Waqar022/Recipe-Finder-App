import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MealPage from "./Pages/MealPage";
import NotFound from "./Pages/NotFound";
import Header from "./Components/Header";
import FavMeals from "./Pages/FavMeals";
import Footer from "./Components/Footer";
import Cart from "./Pages/Cart";

function App() {
  const [favourite, setFavourite] = useState([]);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const handleFav = (meal) => {
    let newFav;
    if (!favourite.some((m) => m.idMeal === meal.idMeal)) {
      newFav = [...favourite, meal];
    } else {
      newFav = favourite.filter((m) => m.idMeal !== meal.idMeal);
      const storedCustomMeals =
        JSON.parse(localStorage.getItem("customMeals")) || [];
      const updatedCustomMeals = storedCustomMeals.filter(
        (m) => m.idMeal !== meal.idMeal
      );
      localStorage.setItem("customMeals", JSON.stringify(updatedCustomMeals));
    }
    setFavourite(newFav);
    localStorage.setItem("favouriteMeals", JSON.stringify(newFav));
  };

  const addToCart = (meal) => {
    const existingItem = cart.find((item) => item.idMeal === meal.idMeal);
    let newCart;
    if (existingItem) {
      newCart = cart.map((item) =>
        item.idMeal === meal.idMeal
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...meal, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const updateCartQuantity = (mealId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(mealId);
      return;
    }

    const newCart = cart.map((item) =>
      item.idMeal === mealId ? { ...item, quantity: newQuantity } : item
    );

    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const removeFromCart = (mealId) => {
    const newCart = cart.filter((item) => item.idMeal !== mealId);
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartItems");
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    const savedFav = localStorage.getItem("favouriteMeals");
    if (savedFav) {
      setFavourite(JSON.parse(savedFav));
    }

    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <>
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        cartItemCount={getCartItemCount()}
      />
      <Routes>
        <Route
          path="/"
          element={<Home favourite={favourite} handleFav={handleFav} />}
        />
        <Route
          path="/favmeals"
          element={<FavMeals favourite={favourite} handleFav={handleFav} />}
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateCartQuantity={updateCartQuantity}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
            />
          }
        />
        <Route
          path="/meal/:id"
          element={
            <MealPage
              favourite={favourite}
              handleFav={handleFav}
              addToCart={addToCart}
              cart={cart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
