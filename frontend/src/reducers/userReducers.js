import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILS,
  USER_LOGOUT,
  IS_USER_ENROLLED_REQUEST,
  IS_USER_ENROLLED_SUCCESS,
  IS_USER_ENROLLED_FAILS,
  IS_USER_ENROLLED_RESET,
} from "../constants/userConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAILS:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userRegisterInfo: action.payload };
    case USER_REGISTER_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const isUserEnrolledReducer = (state = { isEnrolled: null }, action) => {
  switch (action.type) {
    case IS_USER_ENROLLED_REQUEST:
      return { ...state, loading: true };
    case IS_USER_ENROLLED_SUCCESS:
      return { ...state, loading: false, isEnrolled: action.payload };
    case IS_USER_ENROLLED_FAILS:
      return { loading: false, isEnrolled: null };
    case IS_USER_ENROLLED_RESET:
      return { loading: false, isEnrolled: null };
    default:
      return state;
  }
};
