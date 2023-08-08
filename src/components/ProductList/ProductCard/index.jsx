import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export const ProductCard = ({
  product,
  setCard,
  cartList,
  setCartList,
}) => {
  const products = () => {
    let productSum = false;

    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === product.id) {
        productSum = true;
      }
    }
    if (productSum) {
      toast("Produto adicionado ao carrinho")
    } else {
      setCartList([...cartList, {...product }]);
      toast("Produto adicionado")
      localStorage.setItem("@cardRender", JSON.stringify(cartList));
    }
  };

  return (
    <li className={styles.productList}>
      <div className={styles.img}>
        <img src={product.img} alt={product.name} />
      </div>
      <div className={styles.listProducts}>
        <h3>{product.name}</h3>
        <span className={styles.category}>{product.category}</span>
        <span className={styles.valueTitle}>
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button
          onClick={() => {
            products()
          }}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
