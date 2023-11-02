import { useContext } from "react";
import { ProductImageProps } from "../interfaces/interfaces";
import { ProductContext } from "./ProductCard";
import NoImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export const ProductImage = ({ img, alt }: ProductImageProps) => {
  const { product } = useContext(ProductContext);
  const imgToShow = img ? img : product.img ? product.img : NoImage;
  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt={alt ? alt : product.title}
    />
  );
};
