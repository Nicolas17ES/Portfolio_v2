import React from 'react';

// Define a component that stops event bubbling
function StopBubbling({ children }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={stopPropagation}>
      {children}
    </div>
  );
}

export default StopBubbling;
