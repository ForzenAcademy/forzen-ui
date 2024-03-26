import React from 'react';
import { Typography } from '../../../theme/typography/typography';
import Body from '../Copy';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: string;
}

function LabelMedium({ modifier, children }: Props): JSX.Element {
  return (
    <Body modifier={modifier} size={Typography.labelMedium}>
      {children}
    </Body>
  );
}

export default LabelMedium;
