import React, { memo } from 'react';

import logo from './logo.png';
import Footer from './components/Footer/Footer';
import GlobalStyles from './GlobalStyles';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        We are preparing sommething for you...
      </p>
      <span>
        See more at&nbsp;
        <a
          className="App-link"
          href="https://lion.alia.ml/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Christhopher Lion&apos;s profile
        </a>
      </span>
    </header>
    <Footer />
    <GlobalStyles />
  </div>
);

export default memo(App);
