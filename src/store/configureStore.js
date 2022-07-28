import { configureStore } from '@reduxjs/toolkit';
import reducer from "./projects"
// import reducer from './bugs'; 
//at this point we can only work with one reducer

export default function () {
  return configureStore({ reducer });
}
