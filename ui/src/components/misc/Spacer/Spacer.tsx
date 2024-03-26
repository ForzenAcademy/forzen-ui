import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
}

function Spacer({ modifier }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.width = style.width ?? '1rem';
  style.height = style.height ?? '1rem';

  return <div style={style}></div>;
}

export default Spacer;
