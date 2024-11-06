import { useContext, useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import cartContext from "../Store/cart-context";
const HeaderCartButton =(props)=>{

    const cartCtx = useContext(cartContext);
    const [btnIsHighlighted, setBtnIsHighlighted]=useState(false);
     var numberOfCartItems = 0;
     numberOfCartItems =  cartCtx.items.reduce((curNumber,item)=>{ return curNumber+ item.amount},0);
     try {}
     catch(e){
         console.log(e)
     }
     const {items} = cartCtx;
     const btnClass = `${'cart-button'} ${btnIsHighlighted ? 'bump' : ''}`;
     useEffect(()=>{
         if(cartCtx.items.length === 0){
             return
         }
         setBtnIsHighlighted(true);
         const timer = setTimeout(()=>{
             setBtnIsHighlighted(false);
         },300);
         return()=>{
             clearTimeout(timer);
         };
     },[cartCtx.items.length])
return(
    <button  className={btnClass} onClick={props.onClick}>
        <span> <ShoppingCartOutlinedIcon/> </span>
        <span className="cartNumber">{numberOfCartItems}</span>
    </button>
)

}

export default HeaderCartButton;