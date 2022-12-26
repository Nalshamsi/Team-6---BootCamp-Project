import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
    style={{backgroundColor: "#297373", borderColor: "#297373"}}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      <a href="/activity" style={{textDecoration: "none", color: "inherit"}}>{isLoading ? 'Loading…' : "Let's Go!"}</a>
    </Button>
  );
}

export default LoadingButton;