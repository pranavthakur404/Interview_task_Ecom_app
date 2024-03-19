import React, { useState } from "react";
import Products from "../Products";
import styles from "../../components_css/shop-page/ShopProducts.module.css";

const ShopProducts = ({ isMultiDiv }) => {
  const [data, setData] = useState([
    {
      _id: 1,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 2,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 3,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 4,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 5,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 6,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 7,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 8,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 9,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      _id: 10,
      name: "Product 1",
      price: 2500,
      discount: "20",
      imageUrl:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]);

  const [showingData, setShowingData] = useState(4);

  return (
    <>
      <div className={isMultiDiv ? styles.multiDiv : styles.single}>
        {data &&
          data.map((li, index) => {
            return index <= showingData ? (
              <Products key={li._id} {...li} />
            ) : (
              <></>
            );
          })}
      </div>
      {showingData <= data.length ? (
        <button
          className={styles.loadMoreBtn}
          onClick={() => {
            setShowingData(showingData + 4);
          }}
        >
          Load More
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default ShopProducts;
