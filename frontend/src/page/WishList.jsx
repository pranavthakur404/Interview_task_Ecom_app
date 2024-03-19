import ProductBanner from "../components/ProductBanner";
import styles from "../page_css/WishList.module.css";
import Container from "../components/Container";
import { useWishListContext } from "../context/WishlistContext";
import List from "../components/wishlist-page/List";

const WishList = () => {
  const { list, removeList } = useWishListContext();

  return (
    <>
      <div className={styles.wishList}>
        <ProductBanner title="WISHLIST" />
        <Container>
          <main>
            {list.length == 0 ? (
              <h2 style={{ paddingBlock: "2%" }}>No items in your wishlist.</h2>
            ) : (
              <div className={styles.tableWrapper}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Product</th>
                      <th>Stock Status</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {list &&
                      list.map((data) => {
                        return (
                          <List
                            key={data.id}
                            {...data}
                            removeList={removeList}
                          />
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </main>
        </Container>
      </div>
    </>
  );
};

export default WishList;
