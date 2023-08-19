import React, { useState, createContext } from 'react'
export const ContextFunction = createContext()

const Context = ({ children }) => {
    const [cart, setCart] = useState([])
    const [wishlistData, setWishlistData] = useState([])
    const [role,setRole]=useState("");

    return (
        <ContextFunction.Provider value={{ cart, setCart, wishlistData, setWishlistData,role,setRole}}>
            {children}
        </ContextFunction.Provider>
    )
}

export default Context