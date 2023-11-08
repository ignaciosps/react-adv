import { Product } from "../interfaces/interfaces";
import { useState } from "react";

interface ProductInCart extends Product {
  count: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }
      return { ...oldShoppingCart, [product.id]: { ...product, count } };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
  };
};
