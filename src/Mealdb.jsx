import { useEffect, useState } from "react";

function Mealdb() {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, [])



    return (
        <>
            <div>
                <h1>TotalMeals: {meals.length}</h1>


                {
                    meals.map(meal => <Meal strMealThumb={meal.strMealThumb
                    }
                        strMeal={meal.strMeal} strInstructions={meal.strInstructions} key={meal.idMeal} ></Meal>)
                }
            </div>
        </>
    )
}

function Meal(props) {
    return (
        <div className="mealbd">
            <img src={props.strMealThumb
            } alt="" />
            <h3>Name: {props.strMeal}</h3>
            <p><strong>Description: </strong>{props.strInstructions.slice(0, 150)}....</p>
        </div>
    )
}

export default Mealdb;