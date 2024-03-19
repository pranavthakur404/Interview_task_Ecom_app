import { createContext, useContext, useState } from "react";

const wishlistContext = createContext();

const WishlistContext = ({ children }) => {
  const [list, setList] = useState([
    {
      id: 1,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      inStock: true,
      price: 1200,
    },
    {
      id: 2,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      inStock: true,
      price: 1200,
    },
    {
      id: 3,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      inStock: false,
      price: 1200,
    },
    {
      id: 4,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      inStock: true,
      price: 1200,
    },
  ]);

  const addList = (newList) => {
    setList([...list, newList]);
  };

  const removeList = (id) => {
    setList((prevList) => {
      return prevList.filter((data) => {
        return data.id !== id;
      });
    });
  };

  return (
    <wishlistContext.Provider
      value={{
        list,
        addList,
        removeList,
      }}
    >
      {children}
    </wishlistContext.Provider>
  );
};

export const useWishListContext = () => {
  return useContext(wishlistContext);
};

export default WishlistContext;
