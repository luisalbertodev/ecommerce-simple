/* eslint-disable no-else-return */
import { useState, useContext, createContext } from "react";

const CartContext = createContext();

const defaultItems = [];

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState(defaultItems);

  const incProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.ID === productId) {
        return { ...pr, qty: (pr?.qty || 0) + 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const decProdQty = (productId) => {
    const newProds = products.map((pr) => {
      if (pr.ID === productId && pr.qty > 0) {
        return { ...pr, qty: (pr?.qty || 0) - 1 };
      } else {
        return pr;
      }
    });

    setProducts([...newProds]);
  };

  const addProduct = (productId) => {
    setProducts([...products, productId]);
  };

  const removeProduct = (productId) => {
    setProducts([...products.filter(({ ID }) => ID !== productId.ID)]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct,
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
