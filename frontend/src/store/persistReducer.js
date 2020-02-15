import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { APP_NAME } from '../constants/environment.js'

export default reducers => {
    const persistedReducer = persistReducer(
        {
            key: APP_NAME,
            storage: storage,
            whitelist: ['screens', 'users']
        },
        reducers
    );

    return persistedReducer;
};