import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import {apiList} from "../../services/api";
import { useEffect } from "react";
import styles from "./styles.module.scss";

export const HomePage = () => {
  const [productList, setProductList] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState("");
  const [cartList, setCartList] = useState([]);
  const [sumValue, setCard] = useState(false);

  useEffect(() => {
    const renderProducts = async () => {
      try {
        const { data } = await apiList.get("/products");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    renderProducts();
  }, []);

  const productsResults = productList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const products = search ? productsResults : productList;

  return (
    <>
      <Header
        productList={productList}
        value={value}
        setSearch={setSearch}
        setValue={setValue}
        cartList={cartList}
        setCard={setCard}
      />
      <main className={styles.main}>
        <ProductList
          productList={productList}
          setCard={setCard}
          cartList={cartList}
          setCartList={setCartList}
          products={products}
        />
        {sumValue ? (
          <CartModal cartList={cartList} 
          setCard={setCard}
          setCartList={setCartList}
           />
        ) : null}
      </main>
    </>
  );
};
