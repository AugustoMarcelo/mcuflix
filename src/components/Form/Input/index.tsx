import React, {
  useRef, useState, InputHTMLAttributes, useCallback,
} from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({ name, label, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container isFilled={isFilled}>
      <label htmlFor={name}>
        <input
          id={name}
          name={name}
          autoComplete="off"
          ref={inputRef}
          onBlur={handleInputBlur}
          {...rest}
        />
        <span>{label}</span>
      </label>
    </Container>
  );
};

export default Input;
