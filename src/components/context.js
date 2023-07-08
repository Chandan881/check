import React, { useEffect, useState } from "react";


// 1.  Have to create context first
const AppContext = React.createContext()


// 2. Need to create provider function
const AppProvider = ({ children }) => {

    const [data, setData] = useState([])
    const [cartItems, setCartItems] = useState([])

   useEffect(()=>{
     const getData = async() => {
        try{
            const res = await fetch('https://fakestoreapi.com/products');
            const jsonData = await res.json()
            setData(jsonData)
            
        }catch(error) {
            console.log(error)
        }
     }
     getData();
   },[])

   console.log(data);
   




    return <AppContext.Provider value={{ data, cartItems, setCartItems }}>
              {children}
           </AppContext.Provider>
}


export  { AppContext, AppProvider }