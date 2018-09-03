import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import { Button } from 'semantic-ui-react';

const renderButton = (props, content) => (
  <Button {...props} onClick={action('button-click')}>
    {content}
  </Button>
);

storiesOf('Elements/Button', module)
  .addStyled(
    'Primary',
    withInfo()(() =>
      renderButton({ primary: true }, text('Name', 'Primary Button'))
    )
  )
  .addStyled(
    'Primary Disabled',
    withInfo()(() =>
      renderButton(
        { primary: true, disabled: true },
        text('Name', 'Primary Button Disabled')
      )
    )
  )
  .addStyled(
    'Secondary',
    withInfo()(() =>
      renderButton({ secondary: true }, text('Name', 'Secondary Button'))
    )
  )
  .addStyled(
    'Secondary Selected',
    withInfo()(() =>
      renderButton(
        { secondary: true, active: true },
        text('Name', 'Secondary Button Selected')
      )
    )
  )
  .addStyled(
    'Secondary Disabled',
    withInfo()(() =>
      renderButton(
        { secondary: true, disabled: true },
        text('Name', 'Secondary Button Disabled')
      )
    )
  );
