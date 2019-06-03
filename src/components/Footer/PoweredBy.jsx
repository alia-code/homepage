import React from 'react';

const fontStack = `
  -apple-system,
  BlinkMacSystemFont,
  "Helvetica Neue",
  Arial,
  sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

const PoweredBy = (
  <div
    style={{
      fontFamily: fontStack,
      textAlign: 'center',
      fontSize: '.7rem',
    }}
  >
    <p className="p1">
      Powered by
      <a href="https://alia.ml">ΛLIΛ</a>
    </p>
    <p className="p1">
      <a href="https://m.do.co/c/08d07343712a">
        Click here
      </a>
       to subscribe to DigitalOcean and get
      <b>50$</b>
       credit
    </p>
  </div>
);

export default PoweredBy;
