import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import CoursePage from "./components/CoursePage";
import Assignments from "./components/Assignments";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import MyCoursesUser from "./components/MyCoursesUser";
import ContactForm from "./components/ContactUs";
import MyCoursesInstr from "./components/MyCoursesInstr";
import CreateCourse from "./components/CreateCourse";
import CreateChapter from "./components/CreateChapter";
import CareerForm from "./components/CareerForm";
import ProfilePage from "./components/ProfilePage";
import EditProfilePage from "./components/EditProfile";
import DiscussionForum from "./components/DiscussionForum";
import InstructorAssignmentPage from "./components/InstructorAssignmentPage";
import CodeEditor from "./components/codeEditor/codeEditor";
import LeaderBoard from "./components/Leaderboard";
import Footer from "./components/Footer"
import CodeCompiler from "./components/CodeCompiler"
import InstructorSignin from "./components/InstructorSignin"
import InstructorSignup from "./components/InstructorSignup"
import Chatbot from "./components/Chatbot"

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact></Route>
      <Route path="/signin" component={SignIn} exact></Route>
      <Route path="/signup" component={SignUp} exact></Route>
      <Route path="/course/:id" component={CoursePage} exact></Route>
      <Route path="/leaderboard" component={LeaderBoard} exact></Route>
      <Route path="/assignments/:id" component={Assignments} exact></Route>
      <Route path="/admin/login" component={AdminLogin} exact></Route>
      <Route path="/admin/access" component={AdminDashboard} exact></Route>
      <Route path="/mycourses/:id" component={MyCoursesUser} exact></Route>
      <Route path="/contactForm" component={ContactForm} exact></Route>
      <Route path="/careerForm" component={CareerForm} exact></Route>
      <Route path="/myProfile" component={ProfilePage} exact></Route>
      <Route path="/editProfile" component={EditProfilePage} exact></Route>
      <Route path="/codeCompiler" component={CodeCompiler} exact></Route>
      <Route path="/instructor/signin" component={InstructorSignin} exact></Route>
      <Route path="/instructor/signup" component={InstructorSignup} exact></Route>
      {/* <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route> */}
      <Route
        path="/instructorAssignments/:id"
        component={InstructorAssignmentPage}
        exact
      ></Route>
      {/* <Route path="/instructorcourses/:id" component={MyCoursesInstr} exact></Route> */}
      <Route
        path="/instructorcourses/:id"
        component={MyCoursesInstr}
        exact
      ></Route>
      <Route path="/createCourse" component={CreateCourse} exact></Route>
      <Route path="/createChapter/:id" component={CreateChapter} exact></Route>
      {/* <Route path="/quiz/:courseId" component={Quiz} exact></Route> */}
      <Route
        path="/discuss/:courseId"
        component={DiscussionForum}
        exact
      ></Route>
      <Route path="/codeEditor/" component={CodeEditor} exact></Route>
      <Chatbot />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
