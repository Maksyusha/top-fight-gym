import { FC, JSX } from "react";
import Loader from "@/components/loader/loader";
import styles from "./skeleton.module.scss";

const Skeleton: FC<JSX.IntrinsicElements["div"]> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={`${styles.skeleton} ${className && className}`} {...rest}>
      {children ? children : <Loader />}
    </div>
  );
};

export default Skeleton;
