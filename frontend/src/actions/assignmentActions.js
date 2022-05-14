import axios from "axios";
import {
  ASSIGNMENT_CREATE_FAILS,
  ASSIGNMENT_CREATE_REQUEST,
  ASSIGNMENT_CREATE_SUCCESS,
} from "../constants/assignmentConstants";

export const createAssignment =
  (userId, courseId, publicIdd, githubLink, assignmentStatus, instructorId) =>
    async (dispatch) => {
      try {
        dispatch({ type: ASSIGNMENT_CREATE_REQUEST });

        // to handle headers
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(
          "https://trainingsbackend-xcitedu.herokuapp.com/assignment/submitAssignment",
          {
            userId,
            courseId,
            assignmentLink: publicIdd,
            assignmentScreenshotLink: githubLink,
            assignmentStatus,
            instructorId: instructorId,
          },
          config
        );
        dispatch({
          type: ASSIGNMENT_CREATE_SUCCESS,
          payload: data,
        });
        //   localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        console.log(error);
        dispatch({
          type: ASSIGNMENT_CREATE_FAILS,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };
