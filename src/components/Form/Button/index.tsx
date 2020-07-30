import React, { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => (
  <ButtonContainer {...rest}>
    {title}
  </ButtonContainer>
);

export default Button;
