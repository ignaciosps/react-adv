import { useContext, CSSProperties, useCallback } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
  value?: number;
}

export const ProductButtons = ({ className, style, value }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => {
    return counter === maxCount;
  }, [counter, maxCount])();

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{value || counter}</div>
      <button
        onClick={() => increaseBy(1)}
        disabled={isMaxReached}
        className={`${styles.buttonAdd} ${isMaxReached && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
