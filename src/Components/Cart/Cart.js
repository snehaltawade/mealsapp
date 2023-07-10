import { useContext } from "react";
import cartContext from "../../Store/cart-context";
import Modal from "../UI/Modal/Modal";

const Cart=(props)=>{
    var cartCtx = useContext(cartContext)
    const hasItems= cartCtx.totalAmount > 0
    const cartItemRemoveHandler =(id)=>{
        console.log("inside remove item",id);
        cartCtx.removeItem({
            id:id
        })
    }
    const cartItemAddHandler = (props) =>{
        console.log("inside add item",props);
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price
        })
    }
    var cartItems=0
    // if(hasItems){
    cartItems=
        <ul className="cart-items">
        {cartCtx.items.map(items=>
            <li className="itemDiv">
                <div style={{width: "50%"}}>
                <li className="item-name">{items.name}</li>
                <li className="item-price">{items.price}</li>
                <button style={{background:'white',color:'#ff5200',border:'white',fontSize:'large',
    fontWeight:'bolder'}}>X {items.amount}</button>
                </div>
                <div className="buttons">
                    <button onClick={cartItemRemoveHandler.bind(null,items.id)}>-</button>
                    <button onClick={cartItemAddHandler.bind(null,items)}>+</button>
                </div>
            </li>)}
        </ul>
    // }
    return(
        <Modal onClose={props.onClose} >
          {/* {hasItems ? */}
            <div className="cartClass">
             <div>{cartItems}</div>  
            
            <div className="total">
                <span>Total Amount</span>
                <span>Rs. {cartCtx.totalAmount}</span>
            </div>
            <div className="action">
                <button className="close-btn" onClick={props.onClose}>Close</button>
              { hasItems && <button className="order-btn">Order</button>}
            </div>
            </div> 
             {/* : <p>Your cart is empty.</p>} */}
           
        </Modal>
    )
}

export default Cart;