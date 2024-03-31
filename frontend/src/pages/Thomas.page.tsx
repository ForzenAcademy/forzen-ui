import React, { useState } from 'react';
import {
  BodyLarge,
  BodySmall,
  Column,
  Dimens,
  Dropdown,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  Modifier,
  Row,
  Spacer,
  TextField,
} from 'forzen-ui';

const heightOptions = [
  { value: 'cm', label: 'cm' },
  { value: 'm', label: 'm' },
  { value: 'in', label: 'in' },
  { value: 'ft', label: 'ft' },
];

const weightOptions = [
  { value: 'kg', label: 'kg' },
  { value: 'lb', label: 'lb' },
];

export default function ThomasPage(): JSX.Element {
  const [height, setHeight] = useState<number>(NaN);
  const [heightUnit, setHeightUnit] = useState<string>('cm');
  const [weight, setWeight] = useState<number>(NaN);
  const [weightUnit, setWeightUnit] = useState<string>('kg');
  let surfaceArea = NaN;
  let removeGrams = NaN;
  if (!Number.isNaN(height) && !Number.isNaN(weight)) {
    // BSA = 0.007184 × W^0.425 × H^0.725
    let heightScalar = 1;
    if (heightUnit == 'm') heightScalar = 100;
    if (heightUnit == 'in') heightScalar = 2.54;
    if (heightUnit == 'ft') heightScalar = 30.48;
    let weightScalar = 1;
    if (weightUnit == 'lb') weightScalar = 1 / 2.205;
    surfaceArea =
      0.007184 * Math.pow(weight * weightScalar, 0.425) * Math.pow(height * heightScalar, 0.725);
    const key = findClosestKey(surfaceArea);
    if (key) {
      removeGrams = dataDictionary[key];
    }
  }
  const surfaceAreaLabel = Number.isNaN(surfaceArea)
    ? ''
    : `The Body Surface Area is ${surfaceArea.toFixed(2)}m²`;
  const tissueLabel = Number.isNaN(removeGrams) ? '' : `You'll have to remove ${removeGrams}g`;
  return (
    <Column modifier={Modifier.padding(Dimens.x5)}>
      <HeadlineSmall>Tissue Removal Calculator</HeadlineSmall>
      <Spacer modifier={Modifier.size(Dimens.x8)} />
      <BodyLarge>Height</BodyLarge>
      <Row>
        <TextField onTextChange={(text: string) => setHeight(parseFloat(text))}></TextField>
        <Column modifier={Modifier.fillMaxHeight()}>
          <Spacer modifier={Modifier.weight(1)} />
          <Dropdown options={heightOptions} onSelect={(value: string) => setHeightUnit(value)} />
        </Column>
      </Row>
      <Spacer modifier={Modifier.size(Dimens.x4)} />
      <BodyLarge>Weight</BodyLarge>
      <Row>
        <TextField onTextChange={(text: string) => setWeight(parseFloat(text))}></TextField>
        <Column modifier={Modifier.fillMaxHeight()}>
          <Spacer modifier={Modifier.weight(1)} />
          <Dropdown options={weightOptions} onSelect={(value: string) => setWeightUnit(value)} />
        </Column>
      </Row>
      <Spacer modifier={Modifier.size(Dimens.x4)} />
      <BodyLarge>{surfaceAreaLabel}</BodyLarge>
      <BodyLarge>{tissueLabel}</BodyLarge>
    </Column>
  );
}

function findClosestKey(inputValue: number): number | undefined {
  const keys = Object.keys(dataDictionary)
    .map(Number)
    .sort((a, b) => a - b);
  let closestKey: number | undefined = undefined;
  for (const key of keys) {
    if (key <= inputValue) {
      closestKey = key;
    } else {
      break;
    }
  }
  return closestKey;
}

const dataDictionary: { [key: number]: number } = {
  1.35: 199,
  3.1: 4351,
  1.4: 218,
  3.15: 4750,
  1.45: 238,
  3.2: 5186,
  1.5: 260,
  3.25: 5663,
  1.55: 284,
  3.3: 6182,
  1.6: 310,
  3.35: 6750,
  1.65: 338,
  3.4: 7369,
  1.7: 370,
  3.45: 8045,
  1.75: 404,
  3.5: 8783,
  1.8: 441,
  3.55: 9589,
  1.85: 482,
  3.6: 10468,
  1.9: 527,
  3.65: 11428,
  1.95: 575,
  3.7: 12476,
  2.0: 628,
  3.75: 13619,
  2.05: 687,
  3.8: 14867,
  2.1: 750,
  3.85: 16230,
  2.15: 819,
  3.9: 17717,
  2.2: 895,
  3.95: 19340,
  2.25: 978,
  4.0: 21112,
  2.3: 1068,
  4.05: 23045,
  2.35: 1167,
  4.1: 25156,
  2.4: 1275,
  4.15: 27459,
  2.45: 1393,
  4.2: 29972,
  2.5: 1522,
  4.25: 32716,
  2.55: 1662,
  4.3: 35710,
  2.6: 1806,
  4.35: 38977,
  2.65: 1972,
  4.4: 42543,
  2.7: 2154,
  4.45: 46435,
  2.75: 2352,
  4.5: 50682,
  2.8: 2568,
  4.55: 55316,
  2.85: 2804,
  4.6: 60374,
  2.9: 3061,
  4.65: 65893,
  2.95: 3343,
  4.7: 71915,
  3.0: 3650,
  4.75: 78487,
  3.05: 3985,
  4.8: 85658,
};
