import { MdClose } from "react-icons/md";
import { CreateCard } from "./CreateCard";
import styles from "./modal.module.scss";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const CartModal = ({ setCard, setCartList, cartList }) => {
  const render = cartList.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  useEffect(() => {
    const renderCard = JSON.parse(localStorage.getItem("@cardRender"));
    if (renderCard) {
      setCartList(renderCard);
    }
  }, [setCartList]);

  return (
    <div role="dialog" className={styles.cardlist}>
      <div className={styles.cardModal}>
        <div className={styles.cardTitle}>
          <h2>Carrinho de compras</h2>
          <button
            onClick={() => setCard(false)}
            aria-label="close"
            title="Fechar"
          >
            <MdClose size={21} />
          </button>
        </div>
        <div>
          <ul className={styles.cardProduct}>
            {cartList.map((product) => (
              <CreateCard
                key={product.id}
                product={product}
                cartList={cartList}
                setCartList={setCartList}
              />
            ))}
          </ul>
        </div>
        <div className={styles.titleValue}>
          <div>
            <span>Total</span>
            <span>
              {render.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            onClick={() => {
              setCartList([]);
              toast("Todos os itens foram removidos!")
              localStorage.clear()
            }}
          >
            Remover todos
          </button>
        </div>
      </div>
    </div>
  );
};
