import React from 'react';
import { ModifierSet } from '../../../theme/modifier';
import Body from '../Copy';
import { Typography } from '../../../theme';

interface Props {
  modifier?: ModifierSet;
  children: string;
}

function HeadlineLarge({ modifier, children }: Props): JSX.Element {
  return (
    <Body modifier={modifier} size={Typography.headlineLarge}>
      {children}
    </Body>
  );
}

export default HeadlineLarge;
