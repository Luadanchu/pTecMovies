import React, { createContext, useEffect, useState } from 'react'

export const FavList = createContext();

const FavProvider = ({ children }) => {

    const [Quantity, setQuantity] = useState(0)

    const [favItems, setFavItems] = useState(() => {
        try{
          const favItemsStorage = localStorage.getItem('favourites', 'favItems')
          return favItemsStorage ? JSON.parse(favItemsStorage) : []
        } catch {
          return []
        }
    })
    
    const addItemFav = (movie, quantity) =>{

        const existentMovie = isInFav(movie.id)
    
        if (existentMovie){
          existentMovie.quantity = quantity
          setFavItems([...favItems])
        }else {
          setFavItems([...favItems, {...movie, quantity: quantity}])
        }
    }
    const isInFav = (idMovie) => {
        return favItems.find(el => el.id === idMovie)
    }

    const removeItem = (movie) => {
        const removeMovie = favItems.filter(item => item.id !== movie.id)
    
        if(removeMovie){
          setFavItems(removeMovie)
        }
    }
      
    const clear = () => {
        if(favItems.length >= 1){ 
          setFavItems([])
        }
    }

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favItems))
    
        setQuantity(
          favItems.reduce((previous, current) => previous + current.quantity, 0)
        );
    
    }, [favItems])

    return (
        <FavList.Provider value={{ addItemFav, favItems, removeItem, Quantity, clear }}>
            {children}
        </FavList.Provider>
    )
}

export default FavProvider