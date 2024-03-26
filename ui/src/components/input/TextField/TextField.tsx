import React from 'react';
import { Typography } from '../../../theme/typography/typography';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  placeholder?: string;
  onTextChange: (s: string) => void;
}

function TextField({ modifier, placeholder, onTextChange }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.fontSize = Typography.bodyMedium;
  style.padding = style.padding ?? '10px 20px';

  return (
    <input
      type="text"
      style={style}
      onClick={modifier?._onClick}
      placeholder={placeholder}
      onChange={(e) => onTextChange(e.target.value)}
    ></input>
  );
}

export default TextField;
