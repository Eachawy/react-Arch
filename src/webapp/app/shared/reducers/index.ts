import { ReducersMapObject } from '@reduxjs/toolkit';

import locale from './locale';
import authentication from './authentication';


const rootReducer: ReducersMapObject = {
  authentication,
  locale,
};

export default rootReducer;
