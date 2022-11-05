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
import { UsersList } from "./components/Pages/AdminPage/UI/Pages/UsersList/UsersList";
import { QuestionList } from "./components/Pages/AdminPage/UI/Pages/ReportedQuestions/QuestionList";
import { Tags } from "./components/Pages/AdminPage/UI/Pages/Tags/Tags";
import { ReportedAnswers } from "./components/Pages/AdminPage/UI/Pages/ReportedAnswers/ReportedAnswers";
import { PasswordReset } from "./components/Pages/PasswordReset/PasswordReset";
import { PasswordResetResponse } from "./components/Pages/PasswordReset/PasswordResetResponse/PasswordResetResponse";
import TagsList from "./components/Pages/TagsList/TagsList";

const ROLES = [2001, 5150];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<App />}>
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route
            path="/reset-response/:id/:token"
            element={<PasswordResetResponse />}
          />

          <Route path="/" element={<Main />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/questions" element={<QuestionsHome />}>
              <Route
                path="/questions/UserSettings"
                element={<UserSettings />}
              />

              <Route path="/questions" element={<QuestionsLanding />} />
              <Route path="/questions/tags" element={<TagsList/>}/>
              <Route path="/questions/resultsPage" element={<ResultsPage />} />
              <Route
                path="/questions/individual"
                element={<IndividualQuestion />}
              >
                <Route path=":questionId" element={<IndividualQuestion />} />
              </Route>
            </Route>
            {/* protected routes */}
            <Route element={<RequireAuth allowedRoles={ROLES} />}>
              <Route path="/questions-portal" element={<QuestionPortal />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES[1]]} />}>
              <Route path="/admin" element={<AdminPage />}>
                <Route path="/admin" element={<UsersList />} />
                <Route path="/admin/question-list" element={<QuestionList />} />
                <Route path="/admin/tags" element={<Tags />} />
                <Route
                  path="/admin/all-answers"
                  element={<ReportedAnswers />}
                />
              </Route>
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
