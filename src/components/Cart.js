import React, { useContext } from 'react';
import { AppContext } from './context';
import "./Mystyle.css";


const Cart = () => {

  const { cartItems, setCartItems } = useContext(AppContext)

  const handleRemove = (itemId) => {
    const filtered = cartItems.filter((item) => {
      return item.id !== itemId
    })
    setCartItems(filtered)
  };


  return (
    <div className='main'>
          {
            cartItems.map((items) => {
                return(
                    <div className='card'>
                      <div className='imgs'><img src={items.image} alt="img" /></div>
                      <div className='about'>
                         <h4 className='price'>{items.price}</h4>
                         <p className='items'>{items.title}</p>
                         <button onClick={() => handleRemove(items.id)}>Remove</button>
                      </div>
                      
                    </div>
                )
            })
          }
        </div>
  )
}

export default Cart