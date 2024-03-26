import React from 'react';
import { Typography } from '../../../theme/typography/typography';
import Body from '../Copy';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: string;
}

function HeadlineMedium({ modifier, children }: Props): JSX.Element {
  return (
    <Body modifier={modifier} size={Typography.headlineMedium}>
      {children}
    </Body>
  );
}

export default HeadlineMedium;
