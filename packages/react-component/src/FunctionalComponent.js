import React, { useMemo } from 'react';

const FunctionalComponent = () => {
  const message = useMemo(() => 'FunctionalComponent', []);

  return (
    <div>
      {message}
    </div>
  );
};

export default FunctionalComponent;
