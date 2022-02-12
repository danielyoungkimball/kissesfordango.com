import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';

import {
  RecoilRoot,
} from 'recoil';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);