import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ products, cartList, setCard, setCartList}) => {
   return (
      <ul className={styles.container}>
         {products.map((product) => (
            <ProductCard key={product.id} product={product}
            cartList={cartList}
            setCartList={setCartList}
            setCard={setCard} 
            products={products}/>
         ))}
      </ul>
   );
};
