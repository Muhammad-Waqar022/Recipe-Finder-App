import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';

const Cart = ({ cart, updateCartQuantity, removeFromCart, clearCart, getCartItemCount }) => {
  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto p-4">
          <h1 className="font-bold text-green-500 text-4xl mb-10 underline text-center">
            Shopping Cart
          </h1>
          <div className="text-center py-20">
            <ShoppingBag size={80} className="mx-auto mb-6 text-gray-400" />
            <h2 className="text-2xl font-semibold mb-4 text-gray-600 dark:text-gray-400">
              Your cart is empty
            </h2>
            <p className="text-gray-500 dark:text-gray-500 mb-8">
              Add some delicious meals to get started!
            </p>
            <Link 
              to="/"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-all duration-200 inline-block"
            >
              Browse Meals
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex justify-between items-center mb-10">
          <h1 className="font-bold text-green-500 text-4xl underline">
            Shopping Cart ({getCartItemCount()} items)
          </h1>
          <button
            onClick={clearCart}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
          >
            <Trash2 size={18} />
            Clear Cart
          </button>
        </div>

        <div className="space-y-6">
          {cart.map((item) => (
            <div 
              key={item.idMeal} 
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4">
                  <img
                    src={item.strMealThumb}
                    alt={item.strMeal}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="md:w-2/4 flex flex-col justify-between">
                  <div>
                    <Link 
                      to={`/meal/${item.idMeal}`}
                      className="text-xl font-semibold hover:text-green-500 transition-colors duration-200"
                    >
                      {item.strMeal}
                    </Link>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <span>
                        <strong>Category:</strong> {item.strCategory}
                      </span>
                      <span>
                        <strong>Area:</strong> {item.strArea}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/4 flex flex-col items-end justify-between">
                  <div className="flex items-center gap-3 mb-4">
                    <button
                      onClick={() => updateCartQuantity(item.idMeal, item.quantity - 1)}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition-all duration-200"
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span className="text-xl font-semibold min-w-[3ch] text-center">
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateCartQuantity(item.idMeal, item.quantity + 1)}
                      className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 p-2 rounded-full transition-all duration-200"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.idMeal)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <div className="flex items-center text-xl font-semibold">
            <span>Total Items:</span>
            <span className="ml-2 dark:text-white text-green-600 ">{getCartItemCount()}</span>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Link 
              to="/"
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white text-center py-3 rounded-lg transition-all duration-200"
            >
              Continue Shopping
            </Link>
            <button 
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-all duration-200"
              onClick={() => alert('Checkout functionality would go here!')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;