import {
  ASSIGNMENT_CREATE_FAILS,
  ASSIGNMENT_CREATE_REQUEST,
  ASSIGNMENT_CREATE_SUCCESS,
} from "../constants/assignmentConstants";

export const createAssignmentReducer = (state = {}, action) => {
  switch (action.type) {
    case ASSIGNMENT_CREATE_REQUEST:
      return { ...state, loading: true };
    case ASSIGNMENT_CREATE_SUCCESS:
      return { ...state, loading: false, assignmentCreateInfo: action.payload };
    case ASSIGNMENT_CREATE_FAILS:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
