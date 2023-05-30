import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const myFunctions = require('../cpp1/myfunctions.so'); // Adjust the path if necessary

    // Call the C++ function
    const result = myFunctions.addNumbers(2, 3);
    console.log('Result:', result);
  }, []);

  return (<div>My Component</div>
  );
};

export default MyComponent;
