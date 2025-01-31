import React, { FC } from "react";
import styles from "./typography.module.scss";

type TypographyProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2";
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  sectionTitle?: boolean;
  color?: "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

const Typography: FC<TypographyProps> = ({
  variant = "body1",
  component = (variant as string).startsWith("h") ? variant : "p",
  sectionTitle,
  color = "primary",
  className,
  style,
  children,
}) => {
  const element = React.createElement(
    component,
    {
      className: `${styles[variant]} ${styles[color]} ${
        className && className
      } ${sectionTitle && styles["section-title"]}`,
      style,
    },
    children
  );

  return element;
};

export default Typography;
