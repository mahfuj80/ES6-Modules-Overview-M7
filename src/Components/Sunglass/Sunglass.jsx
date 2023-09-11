import React from 'react';

import './Sunglass.css';
import {
  add,
  multiply,
  divideTheFirstNumberByTheSecondNumber as divide,
} from '../../Utils/calculate';
// import add from '../../Utils/calculate';

const Sunglass = () => {
  const first = 55;
  const second = 199;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const vaag = divide(first, second);

  return <div></div>;
};

export default Sunglass;
