import { FC, JSX } from "react";
import NextLink from "next/link";

const Link: FC<JSX.IntrinsicElements["a"]> = ({ href, children, ...rest }) => {
  if (href?.startsWith("/"))
    return (
      <NextLink href={href} {...rest}>
        {children}
      </NextLink>
    );

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default Link;
