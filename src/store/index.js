import { createStore } from "vuex";
import { authen } from "./authen";

const store = createStore({
  modules: {
    authen,
  },
});

export default store;