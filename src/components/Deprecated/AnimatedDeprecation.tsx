import { useSteps } from "spectacle";
import React from "react";
import { Deprecated } from "@Components/Deprecated/Deprecated";

export const AnimatedDeprecation: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const steps = useSteps(1);

  return (
    <>
      {steps.step < 0 ? (
        <div>{children}</div>
      ) : (
        <Deprecated>{children}</Deprecated>
      )}
      {steps.placeholder}
    </>
  );
};
