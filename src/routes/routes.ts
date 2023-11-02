import { LazyExoticComponent, lazy } from "react";
import { NoLazy } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;

  name: string;
}

const LazyLayout = lazy(
  () => import(/*LazyLayout*/ "../01-lazyload/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    name: "Lazy Layout",
    Component: LazyLayout,
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    name: "No Lazy",
    Component: NoLazy,
  },
];
