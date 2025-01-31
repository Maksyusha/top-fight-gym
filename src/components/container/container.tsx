import React, { FC, JSX } from "react";
import styles from "./container.module.scss";

type ContainerProps = {
  component?: string;
} & JSX.IntrinsicElements[keyof HTMLElementTagNameMap];

const Container: FC<ContainerProps> = ({
  component = "div",
  className,
  children,
  ...rest
}) => {
  const element = React.createElement(
    component,
    {
      className: `${styles.container} ${className && className}`,
      ...rest,
    },
    children
  );

  return element;
};

export default Container;
