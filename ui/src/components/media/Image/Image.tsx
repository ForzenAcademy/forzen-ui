import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  source: string;
  modifier?: ModifierSet;
}

function Image({ source, modifier }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};

  return <img src={source} style={style} onClick={modifier?._onClick} />;
}

export default Image;
