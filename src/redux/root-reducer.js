import { combineReducers } from "redux";
//REDUX PERSIS CONFIG
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//ALL REDUCER LISTS
import cartReducer from "./cart/cart.reducers";
import userReducer from "./user/user.reducer";

const persistConfig = {
	key: "root",
	storage,
	whiteList: ["cart"],
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default persistReducer(persistConfig, rootReducer);
