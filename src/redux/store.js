import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReducer from './auth/slice'


const persistedAuthReducer = persistReducer({
  key: 'user-token',
  storage,
  whitelist: ['token'],
}, authReducer)

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export const persistor = persistStore(store);

// Один раз на додаток створити store та редюсер

// Оголосити компонент(и)
// Підписати компонент(и) на дані в store через useSelector
// Оголосити екшен за допомогою createAction
// Відправити екшен із компонента через useDispatch
// Обробити екшен в редюсері

