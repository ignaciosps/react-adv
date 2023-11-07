import { createContext, ReactElement, CSSProperties } from "react";
import { useProduct } from "../hooks/useProduct";
import { ProductContextProps, Product } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};
