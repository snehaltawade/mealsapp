import MealItemForm from "./MealItemForm";
import { Grid } from '@mui/material';
import { useContext } from "react";
import cartContext from "../../../Store/cart-context";

const MealIteam=(props)=>{
  const price = `$${props.price.toFixed(2)}`;
  // console.log(price);
  var cartCtx = useContext(cartContext);
  const addToCartHandler = amount =>{
      console.log(amount,"inside MealItem")
      
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
    // console.log("added");
  }
  // console.log(props)
 
    return(
      <Grid container spacing={2} className="mealItem">
        <Grid item xs={8} >
            <div className="name">{props.name}</div>
            <div className="description">{props.description}</div>
            <div className="price">{price}</div>
        </Grid>
        <Grid item xs={4}>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm>
        </Grid>
     </Grid> 
    )

}
export default MealIteam;