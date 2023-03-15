import React, { createContext, useState } from 'react';

export const ItemsContext = createContext([])

export function ItemsProvider({ children }) {
  const [cartData, setCartData] = useState([
    {
      id: '1',
      name: '貓咪罐罐',
      img: 'https://picsum.photos/300/300?text=1',
      price: 100,
      quantity: 2,
    },
    {
      id: '2',
      name: '貓咪干干',
      img: 'https://picsum.photos/300/300?text=2',
      price: 200,
      quantity: 1,
    }
  ]);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <ItemsContext.Provider value={[cartData, setCartData, totalPrice, setTotalPrice]}>
      {children}
    </ItemsContext.Provider>
  );
}
