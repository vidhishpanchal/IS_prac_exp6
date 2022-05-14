import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILS,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILS,
  IS_USER_ENROLLED_REQUEST,
  IS_USER_ENROLLED_SUCCESS,
  IS_USER_ENROLLED_FAILS,
  IS_USER_ENROLLED_RESET,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    // to handle headers
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "https://trainingsbackend-xcitedu.herokuapp.com/user/userLogin",
      { email, password },
      config
    );
    console.log(data);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  // dispatch({ type: USER_DETAILS_RESET });
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register =
  (name, email, password, mobileNumber, isInstructor) => async (dispatch) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      // to handle headers
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        "https://trainingsbackend-xcitedu.herokuapp.com/user/userRegister",
        { name, email, password, mobileNumber, isInstructor },
        config
      );
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      // dispatch({
      //   type: USER_LOGIN_SUCCESS,
      //   payload: data,
      // });
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAILS,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const isUserEnrolled = (courseId, userId) => async (dispatch) => {
  try {
    dispatch({ type: IS_USER_ENROLLED_REQUEST });

    // to handle headers
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.get(
      "https://trainingsbackend-xcitedu.herokuapp.com/order/checkIfUserIsEnrolledInCourse",
      { courseId, userId },
      config
    );
    dispatch({
      type: IS_USER_ENROLLED_SUCCESS,
      payload: data,
    });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: IS_USER_ENROLLED_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const isUserEnrolledReset = () => (dispatch) => {
  // localStorage.removeItem("token");
  // dispatch({ type: USER_DETAILS_RESET });
  dispatch({
    type: IS_USER_ENROLLED_RESET,
  });
};
