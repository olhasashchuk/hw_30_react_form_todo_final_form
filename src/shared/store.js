import { configureStore } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import todoSlice from '../engine/todo/slice.js';

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    },
    middleware: () => [logger, thunk]
})