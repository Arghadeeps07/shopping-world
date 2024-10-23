'use client'
import { createContext, useState, Dispatch, SetStateAction, ReactNode } from "react";


                                                       
export const ProductCtx = createContext<any>(undefined);

const Provider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  return (
    <ProductCtx.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ProductCtx.Provider>
  );
};

export default Provider;
