import { createContext, useContext, useReducer } from "react";

const cartProvider = createContext();

const CartContext = ({ children }) => {
  const reducer = (cartList, { type, payload }) => {
    if (type == "ADD") {
      return [...cartList, payload];
    }

    if (type == "CLEAR") {
      return [];
    }

    if (type == "DELETE") {
      return cartList.filter((li) => {
        return li.id !== payload;
      });
    }

    if (type == "INC_QUANTITY") {
      return cartList.map((li) => {
        if (li.id == payload) {
          return { ...li, quantity: li.quantity + 1 };
        } else {
          return { ...li };
        }
      });
    }

    if (type == "DEC_QUANTITY") {
      return cartList.map((li) => {
        if (li.id == payload) {
          if (li.quanity > 1) {
            return { ...li, quantity: li.quantity - 1 };
          } else {
            return { ...li };
          }
        } else {
          return { ...li };
        }
      });
    }

    return cartList;
  };
  const [cartList, dispatch] = useReducer(reducer, [
    {
      id: 1,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/2.webp",
      title: "Rexpo Womens shoes",
      quantity: 1,
      price: 1399,
    },
    {
      id: 2,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/2.webp",
      title: "Rexpo Womens shoes",
      quantity: 1,
      price: 1099,
    },
    {
      id: 3,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/2.webp",
      title: "Rexpo Womens shoes",
      quantity: 1,
      price: 1100,
    },
  ]);

  const addCartItem = (newObj) => {
    dispatch({
      type: "ADD",
      payload: newObj,
    });
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const increaseQuanity = (id) => {
    dispatch({
      type: "INC_QUANTITY",
      payload: id,
    });
  };

  const decreaseQuanity = (id) => {
    dispatch({
      type: "DEC_QUANTITY",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  return (
    <cartProvider.Provider
      value={{
        cartList,
        addCartItem,
        deleteItem,
        increaseQuanity,
        decreaseQuanity,
        clearCart,
      }}
    >
      {children}
    </cartProvider.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartProvider);
};

export default CartContext;
