import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Programmes from "./pages/Programmes";
import Admissions from "./pages/Admissions";
import Students from "./pages/Students";
import Research from "./pages/Research";
import News from "./pages/News";
import Contact from "./pages/Contact";
import ElearningHome from "./pages/elearning/ElearningHome";
import StudentDashboard from "./pages/elearning/StudentDashboard";
import ELearningLogin from "./pages/elearning/ElearningLogin";
import Courses from "./pages/elearning/MyCourses";
import SoftwareEngineering from "./pages/elearning/SoftwareEngineering";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* MAIN WEBSITE */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programmes" element={<Programmes />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/students" element={<Students />} />
        <Route path="/research" element={<Research />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />

        {/* E-LEARNING HOME */}
        <Route
          path="/e-learning"
          element={<ElearningHome />}
        />

        <Route
  path="/e-learning/login"
  element={<ELearningLogin />}
/>

<Route
  path="/e-learning/dashboard"
  element={
    localStorage.getItem("studentEmail") ? (
      <StudentDashboard />
    ) : (
      <Navigate to="/e-learning/login" replace />
    )
  }
/>

        {/* MY COURSES */}
        <Route
          path="/e-learning/courses"
          element={
            localStorage.getItem("studentEmail") ? (
              <Courses />
            ) : (
              <Navigate to="/e-learning/login" replace />
            )
          }
        />

        {/* SOFTWARE ENGINEERING COURSE */}
        <Route
          path="/e-learning/course/software-engineering"
          element={
            localStorage.getItem("studentEmail") ? (
              <SoftwareEngineering />
            ) : (
              <Navigate to="/e-learning/login" replace />
            )
          }
        />

        {/* FALLBACK FOR UNKNOWN ROUTES */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;