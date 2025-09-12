import React from 'react'

const MealCard = ({meal}) => {
  return (
    <div className='p-9 text-center' key={meal.idMeal}>
      <div>
            <img className='rounded-md' src={meal.strMealThumb} alt={meal.strMeal} width="300" />
      </div>
      <div>
            <h2 className='font-bold'>{meal.strMeal}</h2>
            <button className='mt-4 bg-orange-600 text-white p-2 rounded-lg' >View More</button>
      </div>
    </div>
  )
}

export default MealCard