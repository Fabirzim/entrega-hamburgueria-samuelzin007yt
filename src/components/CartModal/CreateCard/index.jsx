import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";

export const CreateCard = ({ cartList, setCartList, product }) => {
  const remove = () => {
    const createList = cartList.filter((e) => {
      return e.id !== product.id;
    });
    setCartList(createList);
  };

  return (
    <li className={styles.list}>
      <div>
        <img src={product.img} alt={product.name} />
        <h3>{product.name}</h3>
        <button
          onClick={() => {
            remove();
            toast("Produto excluido com sucesso");
          }}
          aria-label="delete"
          title="Remover item"
        >
          <MdDelete size={21} />
        </button>
      </div>
    </li>
  );
};
