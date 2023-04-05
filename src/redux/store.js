import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/authSlice";
import { shoppingReducer } from "./shopping/shoppingSlice";
import { recipeReducer } from "./recipes/recipesSlice";
import { categoriesReducer } from "./categories/categoriesSlice";
import { ingredientsReducer } from "./ingredients/ingredientsSlice";
import { themeReducer } from "./theme/themeSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const themePersistConfig = {
  key: "theme",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    shopping: shoppingReducer,
    recipes: recipeReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
    theme: persistReducer(themePersistConfig, themeReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
