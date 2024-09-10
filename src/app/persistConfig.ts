import localStorage from "redux-persist/lib/storage";

// root persist reducers
const rootPersistConfig = {
  key: "root",
  storage: localStorage,
  blacklist: [
    "menu",
    "directory",
    "price",
    "coming",
    "consumption",
    "dealers",
    "client",
    "service",
    "return",
    "brand",
    "transactions",
    "spares",
    "returnProduct",
    // "auth"
  ], // those reducers will not be persisted
  whiteList: [], // those reducers will be persisted only
};

export default rootPersistConfig;
