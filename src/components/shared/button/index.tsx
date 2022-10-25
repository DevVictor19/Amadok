import React from "react";

import { Contaier } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button(props: IButtonProps): React.ReactElement<IButtonProps> {
  const { children, ...rest } = props;

  return <Contaier {...rest}>{children}</Contaier>;
}
