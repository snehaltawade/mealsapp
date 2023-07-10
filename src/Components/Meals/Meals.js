import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = ()=>{
    return(
        <div className="meals">
            <MealsSummary></MealsSummary>
            <AvailableMeals></AvailableMeals>
        </div>
        
    )
}

export default Meals;