import '../content/app.scss';
import 'app/config/dayjs.ts';

import React, { useEffect } from 'react';


const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {


  useEffect(() => {}, []);

  return (
    <>
        Hello
    </>
  );
};

export default App;
