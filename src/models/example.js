import { query } from "../services/example";

export default {
  namespace: "example",

  state: {
    id: "1",
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      query();
      yield put({ type: "save" });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
