import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => history.push("/activity");

  return (
    <Button
      style={{ backgroundColor: "#297373", borderColor: "#297373" }}
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading…" : "Let's Go!"}
    </Button>
  );
}

export default LoadingButton;
