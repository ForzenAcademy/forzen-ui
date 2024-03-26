import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: React.ReactNode;
}

function Column({ modifier, children }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.display = 'flex';
  style.flexDirection = 'column';
  style.alignItems = 'start';

  return <div style={style}>{children}</div>;
}

export default Column;
