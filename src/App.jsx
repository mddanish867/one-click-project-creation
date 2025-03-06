import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"
import Newdashboard from "./components/dashboard/newdashboard"
import Dashboard from "./components/dashboard/Dashboard"
import EnterprisePage from "./components/features/EnterprisePage"
import FeaturesPage from "./components/features/Features"
import LearnMorePage from "./components/features/LearnMorePage"
import PricingPage from "./components/features/PricingPage"
import RequestDemoPage from "./components/features/RequestDemoPage"
import SolutionsPage from "./components/features/SolutionsPage"
import LandingPage from "./components/home/LandingPage"
import Layout from "./components/home/layout"
import ForgotPassword from "./components/authentication/ForgotPassword"
import ResetPassword from "./components/authentication/ResetPassword"
import LoginOTP from "./components/authentication/LoginOTP"
import ProgressIndicator from "./components/projects/ProgressIndicator"
import ProjectSetupForm from "./components/projects/ProjectSetupForm"
import SetupSummary from "./components/projects/SetupSummary"
import SuccessMessage from "./components/projects/SuccessMessage"
import TechStackSelector from "./components/projects/TechStackSelector"
import TemplateSelector from "./components/projects/TemplateSelector"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/request-demo" element={<RequestDemoPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/enterprise" element={<EnterprisePage />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            <Route path="/pricing" element={<PricingPage />} />


          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login-otp" element={<LoginOTP />} />
          <Route path="/newdashboard" element={<Newdashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/progress-indicator" element={<ProgressIndicator />} />
          <Route path="/project-setup" element={<ProjectSetupForm />} />
          <Route path="/setup-summary" element={<SetupSummary />} />
          <Route path="/success" element={<SuccessMessage />} />
          <Route path="/tech-selector" element={<TechStackSelector />} />
          <Route path="/temp-selector" element={<TemplateSelector />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
