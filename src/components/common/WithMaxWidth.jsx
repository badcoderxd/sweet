import { MAX_WIDTH_DESKTOP } from '@/config/ui-config';
import React from 'react';

// MaxWidthComponent (HOC)
const MaxWidthComponent = ({ children, maxWidth = MAX_WIDTH_DESKTOP }) => {
  // Style object that applies maxWidth and centers the content
  const style = {
    maxWidth: maxWidth,
    margin: '0 auto',  // Center the component horizontally
    padding: '20px',   // Optional padding
    width: '100%',     // Allow it to take the full width up to maxWidth
  };

  return <div style={style}>{children}</div>;
};

export default MaxWidthComponent;
