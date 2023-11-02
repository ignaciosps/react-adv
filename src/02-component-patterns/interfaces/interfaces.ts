import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

export interface ProductImageProps {
  alt?: string;
  img?: string;
}

export interface ProductTitleProps {
  title?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: ProductTitleProps) => JSX.Element;
  Image: ({ img, alt }: ProductImageProps) => JSX.Element;
  Buttons: () => JSX.Element;
}
