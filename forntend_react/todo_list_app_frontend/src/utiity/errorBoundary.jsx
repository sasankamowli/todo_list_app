import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    // Handle the error here, e.g., log it or display a fallback UI
    console.error(error);
    console.error(errorInfo);
    setHasError(true);
  };

  if (hasError) {
    return <div>Error occurred!</div>; // You can render a fallback UI
  }

  return children;
};

export default ErrorBoundary;
