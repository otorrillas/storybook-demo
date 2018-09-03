import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text, select } from '@storybook/addon-knobs';

import { Message } from 'semantic-ui-react';

import { sizeOptions } from '../utils';

const renderMessage = props => {
  const children = text(
    'Children',
    'This is a Inline help message that sits within the text'
  );
  return (
    <Message size={select('Size', sizeOptions, 'large')} {...props}>
      {children}
    </Message>
  );
};

storiesOf('Components/Message', module)
  .addStyled('Standard', withInfo({})(() => renderMessage()))
  .addStyled(
    'Information',
    withInfo({})(() => renderMessage({ warning: true }))
  )
  .addStyled('Success', withInfo({})(() => renderMessage({ success: true })))
  .addStyled('Critical', withInfo({})(() => renderMessage({ error: true })));
