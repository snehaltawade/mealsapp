import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { useContext, useRef, useState } from "react";
import cartContext from "../../../Store/cart-context";


const MealItemForm =(props)=>{
    var ctx = useContext(cartContext);
    const [amountIsValid ,setamountIsValid ] = useState(true)
    const amountRef = useRef(0);
    const addAmount = (event) => {
        // var amt=ctx.items
        // console.log(amountRef.current.value);
        // console.log("inside amountref");
    }
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountRef.current.value;   //value is always a string
        const enteredAmountNumber = +enteredAmount;
        console.log("entered->",enteredAmount)
        if(
            enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmount>5
        )   
        {
            setamountIsValid(false);
        }
        console.log("Inside MealItemForm ",enteredAmountNumber)
        var items=ctx.items;
        console.log(items);
        items.forEach(element => {
            if(element.id==props.id){
                console.log("true")

            }
        });
        
        props.onAddToCart(enteredAmountNumber)
    }   
    return(
        <form className="form" onSubmit={submitHandler}>
                 {/* <input ref={amountRef} type="text" /> */}
                <TextField type="number" label="Amount"  inputRef={amountRef} defaultValue={1} InputProps={{ inputProps: { min: "0", max: "5", step: "1",id:"amount_"+props.id } }} />
                <Button variant="contained" type="submit" onClick={addAmount}>+ Add</Button>
                {!amountIsValid && <p>Please enter valid amount in range [0-5].</p>}
            </form> 
        )

}

export default MealItemForm;