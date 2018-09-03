import React from 'react';
import map from 'lodash/map';

// StoryBook
import { storiesOf } from '@storybook/react';

// UI elements
import { Card, Grid } from 'semantic-ui-react';

import siteVars from '../constants/site';

const renderColor = (color, name) => (
  <Card key={`color-${name}`} style={{ margin: '20px' }}>
    <div style={{ backgroundColor: color, width: '100%', height: '100px' }} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Description>{color}</Card.Description>
    </Card.Content>
  </Card>
);

const renderColors = () => {
  const colorsGrid = {
    Primary_Grey: siteVars.colorPrimaryGrey,
    Secondary_Grey: siteVars.colorSecondaryGrey,
    Tertiary_Grey: siteVars.colorTertiaryGrey,
    Midnight_Blue: siteVars.colorMidnightBlue,
    Primary_Link_Color: siteVars.colorPrimaryLink,
    Background: siteVars.colorBackground,
    Alert_Green: siteVars.colorAlertGreen,
    Alert_Green_Light: siteVars.colorAlertGreenLight,
    Alert_Blue: siteVars.colorAlertBlue,
    Alert_Yellow: siteVars.colorAlertYellow,
    Alert_Yellow_Light: siteVars.colorAlertYellowLight,
    Alert_Red: siteVars.colorAlertRed,
    Alert_Red_Light: siteVars.colorAlertRedLight
  };
  return (
    <Grid>{map(colorsGrid, (color, name) => renderColor(color, name))}</Grid>
  );
};

storiesOf('Style Guide', module).addStyled('Colors', () => renderColors());
