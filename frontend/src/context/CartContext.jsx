import { createContext, useContext, useState, useEffect } from "react";

// React Context lets us share data (the cart) across pages
// without passing it down manually through every component ("prop drilling").
const CartContext = createContext();

export function CartProvider({ children }) {
  // Load any saved cart from the browser's localStorage on first render,
  // so the cart survives a page refresh (this is a real deployed site,
  // not a sandboxed artifact, so localStorage is safe to use here).
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("edge-cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Every time items changes, save it back to localStorage
  useEffect(() => {
    localStorage.setItem("edge-cart", JSON.stringify(items));
  }, [items]);

  function addItem(product, size, quantity = 1) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === product.id && i.size === size
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === product.id && i.size === size
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          size,
          quantity
        }
      ];
    });
  }

  function removeItem(productId, size) {
    setItems((prev) =>
      prev.filter((i) => !(i.productId === productId && i.size === size))
    );
  }

  function updateQuantity(productId, size, quantity) {
    if (quantity <= 0) return removeItem(productId, size);
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.size === size ? { ...i, quantity } : i
      )
    );
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook so pages just do: const { items, addItem } = useCart();
export function useCart() {
  return useContext(CartContext);
}
