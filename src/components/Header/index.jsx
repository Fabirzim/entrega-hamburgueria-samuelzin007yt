import { useState } from "react";
import Logo from "../../assets/logo.png";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "../Header/styles.module.scss"

export const Header = ({ setSearch, cartList, setCard ,value, setValue }) => {

   const submit = (e) => {
      e.preventDefault();
      setSearch(value);
      setValue("");
   }

   return (
      <header className={styles.headerLogo}>
         <img src={Logo} alt="Kenzie Burguer" />
         <div className={styles.btn}>
            <button onClick={() => {
            setCard(true);
          }}>
                <MdShoppingCart size={21} />
                <span>{cartList.length}</span>
            </button>
            <form className={styles.form} onSubmit={submit}>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Digite sua pesquisa"
                  required
               />

               <div className={styles.btnChange}>
                  <button type="submit">
                     <MdSearch size={21} />
                  </button>
               </div>
            </form>
         </div>
      </header>
   );
};
