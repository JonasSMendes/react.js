import {configureStore} from '@reduxjs/toolkit'

import userReducer from './reducer/userReducer'
import themeReducer from './reducer/themeReducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
