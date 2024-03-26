import React from 'react';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: React.ReactNode;
}

function Box({ modifier, children }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.position = 'relative';

  const childStyle: React.CSSProperties = {
    position: 'absolute',
    top: '0',
    left: '0',
  };

  return (
    <div style={style}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { style: childStyle }),
      )}
    </div>
  );
}

export default Box;
