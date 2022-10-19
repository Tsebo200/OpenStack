import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Pages/Register/Register";

import { LandingPage } from "./components/Pages/LandingPage/LandingPage";
import { ResultsPage } from "./components/Pages/ResultsPage/ResultsPage";

import Playground from "./components/Pages/Register Redo/Playground";
import UserSettings from "./components/Pages/UserSettings/UserSettings";
import AdminPage from "./components/Pages/AdminPage/AdminPage";

import App from "./App";
import "./index.scss";
import IndividualQuestion from "./components/Pages/Questions/IndividualQuestion/IndividualQuestion";
import QuestionPortal from "./components/Pages/Questions/QuestionPortal/QuestionPortal";
import { QuestionsLanding } from "./components/Pages/Questions/QuestionsLanding/QuestionsLanding";
import { QuestionsHome } from "./components/Pages/Questions/QuestionsHome";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/questions" element={<QuestionsHome />}>
          <Route path="/questions" element={<QuestionsLanding />}></Route>
          <Route path="/questions/portal" element={<QuestionPortal />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resultsPage" element={<ResultsPage />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/individual-question" element={<IndividualQuestion />} />
        <Route path="/UserSettings" element={<UserSettings />} />
        <Route path="/admin" element={<AdminPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
