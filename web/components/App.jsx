import { Provider, SignedIn, SignedOut, SignedInOrRedirect, SignedOutOrRedirect } from "@gadgetinc/react";
import { Suspense, useEffect } from "react";
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useNavigate, Link } from "react-router";
import { api } from "../api";
import Index from "../routes/index";
import ProgramSelection from "../routes/program-selection";
import LocationSelection from "../routes/location-selection";
import RankingSelection from "../routes/ranking-selection";
import TuitionSelection from "../routes/tuition-selection";
import ScholarshipSelection from "../routes/scholarship-selection";
import LanguageSelection from "../routes/language-selection";
import EmploymentSelection from "../routes/employment-selection";
import StudentJobs from "../routes/student-jobs";
import Results from "../routes/results";
import SignIn from "../routes/sign-in";
import SignUp from "../routes/sign-up";
import SignedInRoute from "../routes/signed-in";
import VerifyEmail from "../routes/verify-email";
import ForgotPassword from "../routes/forgot-password";
import ResetPassword from "../routes/reset-password";
import ChangePassword from "../routes/change-password";

import "./App.css";

const App = () => {
  useEffect(() => {
    document.title = `${process.env.GADGET_APP}`;
  }, []);

  // Router setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>  
        <Route index element={<Index />} />
        {/* Auth Routes */}
        <Route path="sign-in" element={
          <SignedOutOrRedirect path="/signed-in">
            <SignIn />
          </SignedOutOrRedirect>
        } />
        <Route path="sign-up" element={
          <SignedOutOrRedirect path="/signed-in">
            <SignUp />
          </SignedOutOrRedirect>
        } />
        <Route path="verify-email" element={<VerifyEmail />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="signed-in" element={<SignedInOrRedirect><SignedInRoute /></SignedInOrRedirect>} />
        <Route path="change-password" element={<SignedInOrRedirect><ChangePassword /></SignedInOrRedirect>} />
        {/* University Selector Routes */}
        <Route path="program" element={<ProgramSelection />} />
        <Route path="location" element={<LocationSelection />} />
        <Route path="ranking" element={<RankingSelection />} />
        <Route path="tuition" element={<TuitionSelection />} />
        <Route path="scholarships" element={<ScholarshipSelection />} />
        <Route path="language" element={<LanguageSelection />} />
        <Route path="employment" element={<EmploymentSelection />} />
        <Route path="student-jobs" element={<StudentJobs />} />
        <Route path="results" element={<Results />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}> 
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider api={api} navigate={navigate}>
      <Header />
      <div className="app">
        <div className="app-content">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </div>
    </Provider>
  );
};

const Header = () => {
  return (
    <div className="header">
      <a href="/" rel="noreferrer" style={{ textDecoration: "none" }}>
        <div className="logo">{process.env.GADGET_APP}</div>
      </a>
      <div className="header-content"> 
        <Link to="/program" style={{ color: "black" }}>University Selector</Link>
        <SignedOut>
          <Link to="/sign-in" style={{ color: "black", marginLeft: "20px" }}>Sign In</Link>
          <Link to="/sign-up" style={{ color: "black", marginLeft: "20px" }}>Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <Link to="/signed-in" style={{ color: "black", marginLeft: "20px" }}>Profile</Link>
          <Link to="/change-password" style={{ color: "black", marginLeft: "20px" }}>Change Password</Link>
        </SignedIn>
      </div>
    </div>
  );
};

export default App;