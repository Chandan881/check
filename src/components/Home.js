import React, { useContext } from 'react';
import { AppContext } from './context';
import "./Mystyle.css";

const Home = () => {

// 3. Get data from context    
const { data, cartItems, setCartItems } = useContext(AppContext)




 const addToCart = (items) => {
   setCartItems([ ...cartItems, items])
 }
 console.log(cartItems);

    return(
        <div className='main'>
          {
            data.map((items) => {
                return(
                    <div className='card'>
                      <div className='imgs'><img src={items.image} alt="img" /></div>
                      <div className='about'>
                         <h4 className='price'>{items.price}</h4>
                         <p className='items'>{items.title}</p>
                         <button onClick={()=>{addToCart(items)}}>Add To Cart</button>
                      </div>
                      
                    </div>
                )
            })
          }
        </div>
    )
}

export default Home;


