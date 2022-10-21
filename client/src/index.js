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

// const root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/questions" element={<QuestionsHome />}>
              <Route path="/questions" element={<QuestionsLanding />}></Route>
              <Route path="/questions/portal" element={<QuestionPortal />} />
            </Route>
            <Route path="/home/resultsPage" element={<ResultsPage />} />
            <Route
              path="/home/individual-question"
              element={<IndividualQuestion />}
            />
            <Route path="/home/UserSettings" element={<UserSettings />} />
            <Route path="/home/admin" element={<AdminPage />} />
          </Route>

          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
