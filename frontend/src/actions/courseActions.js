import axios from "axios";
import {
  ONE_COURSE_DETAILS_REQUEST,
  ONE_COURSE_DETAILS_SUCCESS,
  ONE_COURSE_DETAILS_FAILS,
  ALL_USER_COURSES_REQUEST,
  ALL_USER_COURSES_SUCCESS,
  ALL_USER_COURSES_FAILS,
  FRONTEND_COURSES__LIST_REQUEST,
  FRONTEND_COURSES__LIST_SUCCESS,
  FRONTEND_COURSES__LIST_FAILS,
  BACKEND_COURSES__LIST_SUCCESS,
  BACKEND_COURSES__LIST_FAILS,
  BACKEND_COURSES__LIST_REQUEST,
  DESIGNING_COURSES__LIST_REQUEST,
  DESIGNING_COURSES__LIST_SUCCESS,
  DESIGNING_COURSES__LIST_FAILS,
  DATABASE_COURSES__LIST_REQUEST,
  DATABASE_COURSES__LIST_SUCCESS,
  DATABASE_COURSES__LIST_FAILS,
  FULLSTACK_COURSES__LIST_REQUEST,
  FULLSTACK_COURSES__LIST_SUCCESS,
  FULLSTACK_COURSES__LIST_FAILS,
  OTHER_COURSES_LIST_SUCCESS,
  OTHER_COURSES_LIST_FAILS,
  OTHER_COURSES_LIST_REQUEST,
  ALL_INSTRUCTOR_COURSES_REQUEST,
  ALL_INSTRUCTOR_COURSES_SUCCESS,
  ALL_INSTRUCTOR_COURSES_FAILS,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAILS,
} from "../constants/courseConstants";

export const oneCourseDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ONE_COURSE_DETAILS_REQUEST });
    const { data } = await axios.get(`https://trainingsbackend-xcitedu.herokuapp.com/course/oneCourse/${id}`);
    dispatch({
      type: ONE_COURSE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ONE_COURSE_DETAILS_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// AFTER ORDER MODEL
export const allUserCoursesAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_USER_COURSES_REQUEST,
    });
    const { data } = await axios.get(`https://trainingsbackend-xcitedu.herokuapp.com/order/getAllCoursesOfUser/${id}`);
    dispatch({
      type: ALL_USER_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_COURSES_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const allInstructorCoursesAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ALL_INSTRUCTOR_COURSES_REQUEST,
    });
    const { data } = await axios.get(`https://trainingsbackend-xcitedu.herokuapp.com/course/allInstructorCourses/${id}`);
    dispatch({
      type: ALL_INSTRUCTOR_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_INSTRUCTOR_COURSES_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const frontendCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FRONTEND_COURSES__LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allFrontendCourses");
    dispatch({
      type: FRONTEND_COURSES__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FRONTEND_COURSES__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const backendCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: BACKEND_COURSES__LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allBackendCourses");
    dispatch({
      type: BACKEND_COURSES__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: BACKEND_COURSES__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const designingCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DESIGNING_COURSES__LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allDesigningCourses");
    dispatch({
      type: DESIGNING_COURSES__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DESIGNING_COURSES__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const databaseCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: DATABASE_COURSES__LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allDatabaseCourses");
    dispatch({
      type: DATABASE_COURSES__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DATABASE_COURSES__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fullstackCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: FULLSTACK_COURSES__LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allFullstackCourses");
    dispatch({
      type: FULLSTACK_COURSES__LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FULLSTACK_COURSES__LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const otherCourseListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: OTHER_COURSES_LIST_REQUEST,
    });
    const { data } = await axios.get("https://trainingsbackend-xcitedu.herokuapp.com/course/allOtherCourses");
    dispatch({
      type: OTHER_COURSES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: OTHER_COURSES_LIST_FAILS,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCourse =
  (
    instructorId,
    name,
    tagline,
    type,
    description,
    assignmentQuestion,
    publicIdd
  ) =>
    async (dispatch) => {
      try {
        dispatch({ type: COURSE_CREATE_REQUEST });

        // to handle headers
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
          "https://trainingsbackend-xcitedu.herokuapp.com/course/createCourse",
          {
            instructorId,
            name,
            tagline,
            type,
            description,
            assignmentQuestion,
            image: publicIdd,
          },
          config
        );
        dispatch({
          type: COURSE_CREATE_SUCCESS,
          payload: data,
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: COURSE_CREATE_FAILS,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
