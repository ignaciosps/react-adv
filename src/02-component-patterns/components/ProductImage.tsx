import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface Props {
  alt?: string;
  img?: string;
  className?: string;

  style?: CSSProperties;
}

export const ProductImage = ({ img, alt, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ? product.img : NoImage;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt={alt ? alt : product.title}
    />
  );
};
