import React, { useState } from 'react';
import {
  Column,
  BodyLarge,
  BodyMedium,
  Button,
  Spacer,
  Dimens,
  Color,
  LabelMedium,
  Box,
  Image,
  Row,
  OutlinedButton,
  TextField,
  BodySmall,
} from 'forzen-ui';
import './index.css';
import { Modifier } from 'forzen-ui/dist/theme/modifier';
import { Colors } from 'forzen-ui/dist/theme/color/color';

function App() {
  Color.primary = Colors.orange;
  Color.onPrimary = Colors.white;
  Color.primaryContainer = '#f5f0ee';
  Color.onBackground = Colors.black;
  const array1to10 = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="App-container">
      <Column
        modifier={Modifier.background(Color.primaryContainer).padding(Dimens.x4).fillMaxSize()}
      >
        <TextField
          modifier={Modifier.fillMaxWidth()}
          placeholder="Search"
          onTextChange={(e) => console.log(e)}
        ></TextField>
        <Spacer modifier={Modifier.size(Dimens.x4)} />
        <BodyMedium>Align your Body</BodyMedium>
        <Spacer modifier={Modifier.size(Dimens.x2)} />
        <Row>
          {array1to10.map((n) => (
            <Column key={n} modifier={Modifier.padding(Dimens.x3)}>
              <Image
                modifier={Modifier.size('100px')}
                source="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png"
              />
              <BodySmall>{`Inversions ${n}`}</BodySmall>
            </Column>
          ))}
        </Row>
        <Spacer modifier={Modifier.size(Dimens.x6)} />
        <BodyMedium>Favorite Collections</BodyMedium>
        <Spacer modifier={Modifier.size(Dimens.x2)} />
        <Row>
          {array1to10.map((n) => (
            <Column key={n}>
              <Row
                modifier={Modifier.padding(Dimens.x3)
                  .background('#e7e1de')
                  .margin(Dimens.x2)
                  .width('300px')}
              >
                <Image
                  modifier={Modifier.size('100px')}
                  source="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png"
                />
                <Spacer modifier={Modifier.size(Dimens.x3)} />
                <BodySmall>{`Inversions ${n} TOP ROW`}</BodySmall>
              </Row>
              <Spacer modifier={Modifier.size(Dimens.x2)} />
              <Row
                modifier={Modifier.padding(Dimens.x3)
                  .background('#e7e1de')
                  .margin(Dimens.x2)
                  .width('300px')}
              >
                <Image
                  modifier={Modifier.size('100px')}
                  source="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png"
                />
                <Spacer modifier={Modifier.size(Dimens.x3)} />
                <BodySmall>{`Inversions ${n} BOTTOM ROW`}</BodySmall>
              </Row>
            </Column>
          ))}
        </Row>
        <Spacer modifier={Modifier.weight(1)} />
        <Row modifier={Modifier.fillMaxWidth().background('#e7e1de').height('100px')}>
          <BodyLarge modifier={Modifier.weight(1)}>Home</BodyLarge>
          <BodyLarge modifier={Modifier.weight(1)}>Profile</BodyLarge>
        </Row>
      </Column>
    </div>
  );
}

export default App;

/*
<BodyLarge
          modifier={Modifier.onClick(() => alert('Adopt a Brandon today'))
            .background(Colors.blue)
            .foreground(Colors.white)
            .padding(Dimens.x4)
            .cornerRadius(Dimens.x4)}
        >
          Batman
        </BodyLarge>
        <Spacer modifier={Modifier.size(Dimens.x4)} />
        <Button modifier={Modifier.onClick(() => alert('Hamdizzlefoshizzle'))}>
          <BodyMedium>click me</BodyMedium>
        </Button>
        <OutlinedButton modifier={Modifier.onClick(() => alert('Hamdizzlefoshizzle'))}>
          <BodyMedium>click me outlined</BodyMedium>
        </OutlinedButton>
        <Spacer modifier={Modifier.size(Dimens.x4)} />
        <Box
          modifier={Modifier.size('200px')
            .background(Colors.green)
            .padding(Dimens.x4)
            .cornerRadius(Dimens.x5)}
        >
          <LabelMedium>AAAAA</LabelMedium>
          <LabelMedium>BBBBB</LabelMedium>
          <Image source="https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png" />
        </Box>
        <Spacer modifier={Modifier.size(Dimens.x4)} />
        <TextField
          modifier={Modifier.background(Colors.blue).foreground(Colors.white)}
          onTextChange={(s) => setEnteredText(s)}
        />
        <BodyMedium>{enteredText}</BodyMedium>
*/
