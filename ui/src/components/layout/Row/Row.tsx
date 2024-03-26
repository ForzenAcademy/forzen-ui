import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: React.ReactNode;
}

function Row({ modifier, children }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.display = 'flex';
  style.flexDirection = 'row';
  style.alignItems = 'start';

  return <div style={style}>{children}</div>;
}

export default Row;
