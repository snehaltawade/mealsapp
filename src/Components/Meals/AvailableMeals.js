import Card from "../UI/Card";
import MealIteam from "./MealItems/MealItem";

const DUMMY_MEALS =[
    {
        id:'m1',
        name:'Chiken Dum Biryani',
        description: 'Mouth watering, yummilicious, testy chiken biryani served with rayta',
        price: 90,
    },
    {
        id:'m2',
        name:'Chiken Hydreabadi Biryani',
        description: 'Mouth watering, yummilicious, testy chiken biryani served with rayta',
        price: 110,
    },
    {
        id:'m3',
        name:'Chiken Tandoor Biryani',
        description: 'Mouth watering, yummilicious, testy chiken biryani served with rayta',
        price: 95,
    },
    {
        id:'m4',
        name:'Chiken pudina rich Biryani',
        description: 'Mouth watering, yummilicious, testy chiken biryani served with rayta',
        price: 80,
    },
]

const AvailableMeals =()=>{
    const mealList=DUMMY_MEALS.map(meals=><MealIteam key={meals.id} name={meals.name} description={meals.description} price={meals.price} id={meals.id}></MealIteam>);
    return(
        <Card>
            <ul>
            {mealList}
            </ul>
       
        </Card>
        
        
    )
}

export default AvailableMeals;