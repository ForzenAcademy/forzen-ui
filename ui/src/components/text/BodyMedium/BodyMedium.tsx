import React from 'react';
import { Typography } from '../../../theme/typography/typography';
import Body from '../Copy';
import { ModifierSet } from '../../../theme/modifier';

interface Props {
  modifier?: ModifierSet;
  children: string;
}

function BodyMedium({ modifier, children }: Props): JSX.Element {
  return (
    <Body modifier={modifier} size={Typography.bodyMedium}>
      {children}
    </Body>
  );
}

export default BodyMedium;
