import { JSX } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import ChangePassword from "./pages/ChangePassword";
import EmailVerification from "./pages/EmailVerification";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import TodoAppPage from "./pages/TodoAppPage";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoapp" element={<TodoAppPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
