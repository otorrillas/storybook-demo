import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { number } from '@storybook/addon-knobs';

import ProgressBar from '../components/progress-bar';

const renderProgressBar = props => (
  <div
    style={{
      width: '100%'
    }}
  >
    <ProgressBar {...props} />
  </div>
);

storiesOf('Components', module).addStyled(
  'Progress Bar',
  withInfo()(() =>
    renderProgressBar({
      current: number('Current', 3),
      total: number('Total', 10)
    })
  )
);
