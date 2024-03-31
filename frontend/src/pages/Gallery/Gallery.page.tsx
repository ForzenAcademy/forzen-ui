import {
  BodyLarge,
  BodyMedium,
  BodySmall,
  Button,
  Column,
  Dimens,
  HeadlineLarge,
  HeadlineMedium,
  HeadlineSmall,
  LabelLarge,
  LabelMedium,
  LabelSmall,
  OutlinedButton,
  Spacer,
  Image,
  Modifier,
} from 'forzen-ui';
import React from 'react';
export default function GalleryPage(): JSX.Element {
  return (
    <Column>
      <HeadlineLarge>Gallery</HeadlineLarge>
      <Spacer modifier={Modifier.size(Dimens.x8)} />
      <HeadlineLarge>This is a HeadlineLarge</HeadlineLarge>
      <HeadlineMedium>This is a HeadlineMedium</HeadlineMedium>
      <HeadlineSmall>This is a HeadlineSmall</HeadlineSmall>
      <Spacer modifier={Modifier.size(Dimens.x2)} />
      <BodyLarge>This is a BodyLarge</BodyLarge>
      <BodyMedium>This is a BodyMedium</BodyMedium>
      <BodySmall>This is a BodySmall</BodySmall>
      <Spacer modifier={Modifier.size(Dimens.x2)} />
      <LabelLarge>This is a LabelLarge</LabelLarge>
      <LabelMedium>This is a LabelMedium</LabelMedium>
      <LabelSmall>This is a LabelSmall</LabelSmall>
      <Spacer modifier={Modifier.size(Dimens.x2)} />
      <Button>
        <BodyMedium>Button</BodyMedium>
      </Button>
      <OutlinedButton>
        <BodyMedium>Outlined Button</BodyMedium>
      </OutlinedButton>
      <Spacer modifier={Modifier.size(Dimens.x2)} />
      <Image source="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png" />
    </Column>
  );
}
