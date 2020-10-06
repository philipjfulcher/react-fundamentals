// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react';
import '../box-styles.css';

const Box = ({size, children, style, ...props}) => {
  const sizeClassName = size ? `box--${size}` : '';

  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...props}
    >
      {children}
    </div>
  );
};

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
      <Box>sizeless box</Box>
    </div>
  );
}

export default App;
