import { createContext, useContext } from "react";
import { useState } from "react";

const CompareContext = createContext();

const CompareProvider = ({ children }) => {
  const [compareData, setCompareData] = useState([
    {
      id: 1,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      price: "1300",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra Class aptent taciti",
      availability: true,
    },
    {
      id: 2,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      price: "1300",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra Class aptent taciti",
      availability: false,
    },
    {
      id: 3,
      imgUrl:
        "https://template.hasthemes.com/shome/shome/assets/img/shop/product-mini/1.webp",
      title: "Leather Mens Slipper",
      price: "1300",
      description:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra Class aptent taciti",
      availability: true,
    },
  ]);

  const addData = (newData) => {
    for (i = 0; i <= 1; i++) {
      CompareContext[i] = compareData[i + 1];
    }
    compareData[2] = newData;
  };

  const deleteData = (id) => {
    setCompareData((prevData) => {
      return prevData.filter((data) => {
        return data.id !== id;
      });
    });
  };
  return (
    <CompareContext.Provider
      value={{
        addData,
        compareData,
        deleteData,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompareContext = () => {
  return useContext(CompareContext);
};

export default CompareProvider;
