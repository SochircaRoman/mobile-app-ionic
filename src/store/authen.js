import { auth } from '../firebaseConfig';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Check user status
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const authen = {
  namespaced: true,
  state: initialState,
  actions: {
    logout(context) {
      localStorage.removeItem("user");
      context.commit('logout');
    },
    async register(context, {data, email, password}) {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
          context.commit('registerSuccess')
          localStorage.setItem("user", JSON.stringify(data));
      } else {
          context.commit('registerFailure');
          throw new Error('Unable to register user')
      }
    },
    async login(context, {data, email, password}) {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response) {
          context.commit('loginSuccess');
          localStorage.setItem("user", JSON.stringify(data));
      } else {
          context.commit('loginFailure');
          throw new Error('login failed')
      }
    }
  },
  mutations: {
    loginSuccess(state, user) {
      state.status.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    }
  }
};