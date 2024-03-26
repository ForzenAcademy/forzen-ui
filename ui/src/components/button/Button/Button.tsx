import React from 'react';
import { Typography } from '../../../theme/typography/typography';
import { ModifierSet } from '../../../theme/modifier';
import { Color } from '../../../theme';

interface Props {
  modifier?: ModifierSet;
  children: React.ReactNode;
}

function Button({ modifier, children }: Props): JSX.Element {
  const style = modifier?.toCss() ?? {};
  style.fontSize = Typography.bodyMedium;
  style.backgroundColor = modifier?._background ?? Color.primary;
  style.color = modifier?._foreground ?? Color.onPrimary;
  style.border = 'none';
  style.padding = style.padding ?? '10px 20px';
  style.borderRadius = '9999px';
  style.cursor = 'pointer';
  style.textAlign = 'center';
  style.textDecoration = 'none';
  style.display = 'inline-block';
  style.userSelect = 'none';
  style.boxSizing = 'border-box';

  return (
    <div style={style} onClick={modifier?._onClick}>
      {children}
    </div>
  );
}

export default Button;
