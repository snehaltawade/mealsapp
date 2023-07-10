import { Fragment } from "react";
import mealsImage from '../assets/meals.jpg';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderCartButton from "./HeaderCartButton";
function Header(props){
  return(
      <Fragment>
          <header className='header'>
          <h1>Meals </h1>
          <HeaderCartButton onClick={props.onShowCart}/>
          {/* <button onClick={props.onShowCart}>
              <span><ShoppingCartIcon/></span>
              <span className="badge">0</span>
              </button> */}
          </header>
          <div className='main-img'>
              <img src={mealsImage} alt="food" />
          </div>
      </Fragment>
  )
}

export default Header;
