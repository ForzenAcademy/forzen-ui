import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  size: string;
  children: string;
}

function Copy({ modifier, size, children }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.fontSize = size;
  style.background = modifier?._background;
  style.color = modifier?._foreground;

  return (
    <div style={style} onClick={modifier?._onClick}>
      {children}
    </div>
  );
}

export default Copy;
