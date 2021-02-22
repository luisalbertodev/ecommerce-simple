/* eslint-disable no-else-return */
import { useState, useContext, createContext } from "react";

const CartContext = createContext();

const defaultItems = [];

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultItems);

  const incProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId) {
        return { ...pr, qty: pr.qty + 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const decProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.id === productId && pr.qty > 0) {
        return { ...pr, qty: pr.qty - 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const removeProduct = (productId) => {
    setProducts([...products.filter(({ id }) => id !== productId)]);
  };

  return (
    <CartContext.Provider
      value={{
        products,

        removeProduct,
        incProdQty,
        decProdQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);
export { CartProvider, useCartContext };
