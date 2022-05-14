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
  BACKEND_COURSES__LIST_REQUEST,
  BACKEND_COURSES__LIST_SUCCESS,
  BACKEND_COURSES__LIST_FAILS,
  DESIGNING_COURSES__LIST_REQUEST,
  DESIGNING_COURSES__LIST_SUCCESS,
  DESIGNING_COURSES__LIST_FAILS,
  DATABASE_COURSES__LIST_REQUEST,
  DATABASE_COURSES__LIST_SUCCESS,
  DATABASE_COURSES__LIST_FAILS,
  FULLSTACK_COURSES__LIST_REQUEST,
  FULLSTACK_COURSES__LIST_SUCCESS,
  FULLSTACK_COURSES__LIST_FAILS,
  OTHER_COURSES_LIST_REQUEST,
  OTHER_COURSES_LIST_SUCCESS,
  OTHER_COURSES_LIST_FAILS,
  ALL_INSTRUCTOR_COURSES_REQUEST,
  ALL_INSTRUCTOR_COURSES_SUCCESS,
  ALL_INSTRUCTOR_COURSES_FAILS,
  COURSE_CREATE_REQUEST,
  COURSE_CREATE_SUCCESS,
  COURSE_CREATE_FAILS,
} from "../constants/courseConstants";

// Partiicular course details
export const oneCourseDetailsReducer = (
  state = { course: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ONE_COURSE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ONE_COURSE_DETAILS_SUCCESS:
      return { loading: false, course: action.payload };
    case ONE_COURSE_DETAILS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allUserCoursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case ALL_USER_COURSES_REQUEST:
      return { ...state, loading: true, courses: [] };
    case ALL_USER_COURSES_SUCCESS:
      return { loading: false, courses: action.payload };
    case ALL_USER_COURSES_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const allInstructorCoursesReducer = (
  state = { instructorCourses: [] },
  action
) => {
  switch (action.type) {
    case ALL_INSTRUCTOR_COURSES_REQUEST:
      return { ...state, loading: true, instructorCourses: [] };
    case ALL_INSTRUCTOR_COURSES_SUCCESS:
      return { loading: false, instructorCourses: action.payload };
    case ALL_INSTRUCTOR_COURSES_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const frontendCourseListReducer = (
  state = { frontendCourseList: [] },
  action
) => {
  switch (action.type) {
    case FRONTEND_COURSES__LIST_REQUEST:
      return { ...state, loading: true, frontendCourseList: [] };
    case FRONTEND_COURSES__LIST_SUCCESS:
      return { loading: false, frontendCourseList: action.payload };
    case FRONTEND_COURSES__LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const backendCourseListReducer = (
  state = { backendCourseList: [] },
  action
) => {
  switch (action.type) {
    case BACKEND_COURSES__LIST_REQUEST:
      return { ...state, loading: true, backendCourseList: [] };
    case BACKEND_COURSES__LIST_SUCCESS:
      return { loading: false, backendCourseList: action.payload };
    case BACKEND_COURSES__LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const designingCourseListReducer = (
  state = { designingCourseList: [] },
  action
) => {
  switch (action.type) {
    case DESIGNING_COURSES__LIST_REQUEST:
      return { ...state, loading: true, designingCourseList: [] };
    case DESIGNING_COURSES__LIST_SUCCESS:
      return { loading: false, designingCourseList: action.payload };
    case DESIGNING_COURSES__LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const databaseCourseListReducer = (
  state = { databaseCourseList: [] },
  action
) => {
  switch (action.type) {
    case DATABASE_COURSES__LIST_REQUEST:
      return { ...state, loading: true, databaseCourseList: [] };
    case DATABASE_COURSES__LIST_SUCCESS:
      return { loading: false, databaseCourseList: action.payload };
    case DATABASE_COURSES__LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fullstackCourseListReducer = (
  state = { fullstackCourseList: [] },
  action
) => {
  switch (action.type) {
    case FULLSTACK_COURSES__LIST_REQUEST:
      return { ...state, loading: true, fullstackCourseList: [] };
    case FULLSTACK_COURSES__LIST_SUCCESS:
      return { loading: false, fullstackCourseList: action.payload };
    case FULLSTACK_COURSES__LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const otherCourseListReducer = (
  state = { otherCourseList: [] },
  action
) => {
  switch (action.type) {
    case OTHER_COURSES_LIST_REQUEST:
      return { ...state, loading: true, otherCourseList: [] };
    case OTHER_COURSES_LIST_SUCCESS:
      return { loading: false, otherCourseList: action.payload };
    case OTHER_COURSES_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createCourseReducer = (state = {}, action) => {
  switch (action.type) {
    case COURSE_CREATE_REQUEST:
      return { ...state, loading: true };
    case COURSE_CREATE_SUCCESS:
      return { ...state, loading: false, courseCreateInfo: action.payload };
    case COURSE_CREATE_FAILS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
