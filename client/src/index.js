import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Pages/Register/Register";

import { LandingPage } from "./components/Pages/LandingPage/LandingPage";
import { ResultsPage } from "./components/Pages/ResultsPage/ResultsPage";

import UserSettings from "./components/Pages/UserSettings/UserSettings";
import AdminPage from "./components/Pages/AdminPage/AdminPage";

import App from "./App";
import "./index.scss";
import IndividualQuestion from "./components/Pages/Questions/IndividualQuestion/IndividualQuestion";
import QuestionPortal from "./components/Pages/Questions/QuestionPortal/QuestionPortal";
import { QuestionsLanding } from "./components/Pages/Questions/QuestionsLanding/QuestionsLanding";
import { QuestionsHome } from "./components/Pages/Questions/QuestionsHome";
import { AuthProvider } from "./Store/AuthProvider/AuthProvider";
import { Main } from "./components/Main/Main";
import { Missing } from "./components/Pages/Missing/Missing";
import { RequireAuth } from "./components/Security/RequireAuth";

const ROLES = {
  'user': 2001,
  'admin': 5150
}


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<App />}>
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Main />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/questions" element={<QuestionsHome />}>
            <Route path="/questions/UserSettings" element={<UserSettings />} />
              <Route path="/questions" element={<QuestionsLanding />} />
              <Route path="/questions/resultsPage" element={<ResultsPage />} />
              <Route
                path="/questions/individual"
                element={<IndividualQuestion />}
              />
            </Route>
          {/* protected routes */}
            <Route element={<RequireAuth allowedRoles={ROLES}/>}>
              <Route path="/questions-portal" element={<QuestionPortal />} />
              
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.admin]}/>}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="/*" element={<Missing />} />
        </Route>
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

// https://www.youtube.com/watch?v=brcHK3P6ChQ&list=PL0Zuz27SZ-6PRCpm9clX0WiBEMB70FWwd&index=1
