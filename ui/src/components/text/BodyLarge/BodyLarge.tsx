import React from 'react';
import { ModifierSet } from '../../../theme/modifier';
import Body from '../Copy';
import { Typography } from '../../../theme';

interface Props {
  modifier?: ModifierSet;
  children: string;
}

function BodyLarge({ modifier, children }: Props): JSX.Element {
  return (
    <Body modifier={modifier} size={Typography.bodyLarge}>
      {children}
    </Body>
  );
}

export default BodyLarge;
