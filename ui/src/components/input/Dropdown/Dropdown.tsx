import React, { useState } from 'react';
import { Typography } from '../../../theme';
import { ModifierSet } from '../../../theme/modifier';

type Option = {
  value: string;
  label: string;
};

interface Props {
  modifier?: ModifierSet;
  options: Option[];
  onSelect: (value: string) => void;
}

export function Dropdown({ modifier, options, onSelect }: Props): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const option = options.find((o: Option) => o.value == value);
    if (option) {
      setSelectedOption(option);
      onSelect(value);
    }
  };

  const style = modifier?.toCss() ?? {};
  style.fontSize = Typography.bodyMedium;
  style.padding = style.padding ?? '10px 20px';

  return (
    <select value={selectedOption.value} onChange={handleChange} style={style}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
