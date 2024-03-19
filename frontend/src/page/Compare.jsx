import React from "react";
import ProductBanner from "../components/ProductBanner";
import Container from "../components/Container";
import styles from "../page_css/Compare.module.css";
import { useCompareContext } from "../context/CompareProvider";
import { ImCross } from "react-icons/im";

const Compare = () => {
  const { compareData, addData, deleteData } = useCompareContext();
  return (
    <div className={styles.compare}>
      <ProductBanner title="COMPARE" />
      <Container>
        <main>
          {compareData.length == 0 ? (
            <h2>No Items To compare</h2>
          ) : (
            <div className={styles.compareTable}>
              <table>
                <tbody>
                  <tr>
                    <th>Product Info</th>
                    {compareData[0] && (
                      <td className={styles.imgContainer}>
                        <button
                          className={styles.removeBtn}
                          onClick={() => {
                            deleteData(compareData[0].id);
                          }}
                        >
                          <ImCross /> Remove
                        </button>
                        <br />
                        <img
                          src={compareData[0].imgUrl}
                          alt={compareData[0].title}
                        />
                        <p className={styles.productTitle}>
                          {compareData[0].title}
                        </p>
                        <button className={styles.addTocartBtn}>
                          Add to Cart
                        </button>
                      </td>
                    )}
                    {compareData[1] && (
                      <td>
                        <button
                          className={styles.removeBtn}
                          onClick={() => {
                            deleteData(compareData[0].id);
                          }}
                        >
                          <ImCross /> Remove
                        </button>
                        <br />
                        <img
                          src={compareData[1].imgUrl}
                          alt={compareData[1].title}
                        />
                        <p className={styles.productTitle}>
                          {compareData[1].title}
                        </p>
                        <button className={styles.addTocartBtn}>
                          Add to Cart
                        </button>
                      </td>
                    )}
                    {compareData[2] && (
                      <td>
                        <button
                          className={styles.removeBtn}
                          onClick={() => {
                            deleteData(compareData[0].id);
                          }}
                        >
                          <ImCross /> Remove
                        </button>
                        <br />
                        <img
                          src={compareData[2].imgUrl}
                          alt={compareData[2].title}
                        />
                        <p className={styles.productTitle}>
                          {compareData[2].title}
                        </p>
                        <button className={styles.addTocartBtn}>
                          Add to Cart
                        </button>
                      </td>
                    )}
                  </tr>
                  <tr className={styles.price}>
                    <th>Price</th>
                    {compareData[0] && <td>₹{compareData[0].price}</td>}
                    {compareData[1] && <td>₹{compareData[1].price}</td>}
                    {compareData[2] && <td>₹{compareData[2].price}</td>}
                  </tr>
                  <tr className={styles.description}>
                    <th>Description</th>
                    {compareData[0] && <td>{compareData[0].description}</td>}
                    {compareData[1] && <td>{compareData[1].description}</td>}
                    {compareData[2] && <td>{compareData[2].description}</td>}
                  </tr>
                  <tr className={styles.stockIcon}>
                    <th>Availablity</th>
                    {compareData[0] && (
                      <td>
                        {compareData[0].availability ? (
                          <span className={styles.inIcon}>In Stock</span>
                        ) : (
                          <span className={styles.outIcon}>Out Of Stock</span>
                        )}
                      </td>
                    )}
                    {compareData[1] && (
                      <td>
                        {compareData[1].availability ? (
                          <span className={styles.inIcon}>In Stock</span>
                        ) : (
                          <span className={styles.outIcon}>Out Of Stock</span>
                        )}
                      </td>
                    )}
                    {compareData[2] && (
                      <td>
                        {compareData[2].availability ? (
                          <span className={styles.inIcon}>In Stock</span>
                        ) : (
                          <span className={styles.outIcon}>Out Of Stock</span>
                        )}
                      </td>
                    )}
                  </tr>
                  <tr>
                    <th>Weight</th>
                    {compareData[0] && <td>N/A</td>}
                    {compareData[1] && <td>N/A</td>}
                    {compareData[2] && <td>N/A</td>}
                  </tr>
                  <tr>
                    <th>Dimensions</th>
                    {compareData[0] && <td>N/A</td>}
                    {compareData[1] && <td>N/A</td>}
                    {compareData[2] && <td>N/A</td>}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </main>
      </Container>
    </div>
  );
};

export default Compare;
