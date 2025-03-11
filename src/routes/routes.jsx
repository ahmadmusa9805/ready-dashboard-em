import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/dashboard/Dashboard';
import UserManagement from '../pages/user-management/UserManagement';
import AddSkillCategory from '../pages/add-skill-category/AddSkillCategory';
import AddAudioTopic from '../pages/add-audio-topic/AddAudioTopic';
import ReportManagement from '../pages/report-management/ReportManagement';
import MakeAdmin from '../pages/make-admin/MakeAdmin';
import Settings from '../pages/settings/Settings';
import AboutUs from '../pages/settings/about-us/AboutUs';
import ContactUs from '../pages/settings/contact-us/ContactUs';
import PrivacyPolicy from '../pages/settings/privacy-policy/PrivacyPolicy';
import TermsAndCondition from '../pages/settings/terms-and-condition/TermsAndCondition';
import Profile from '../pages/profile/profile';
import LogIn from '../pages/auth/login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import VerificationCode from '../pages/auth/VerificationCode';
import SetNewPassword from '../pages/auth/SetNewPassword';
import SuccessfullyChangedPasswordPage from '../pages/auth/successfully-changed-password';
import Notification from '../pages/notification/Notification';
import AllUser from '../pages/user-management/AllUser';
import AllDonor from '../pages/user-management/AllDonor';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/user-management",
        element: <UserManagement></UserManagement>,
      },
      {
        path: "/user-management/all-user",
        element: <AllUser></AllUser>,
      },
      {
        path: "/user-management/all-donor",
        element: <AllDonor></AllDonor>,
      },
      {
        path: "/add-skill-category",
        element: <AddSkillCategory></AddSkillCategory>,
      },
      {
        path: "/add-audio-topic",
        element: <AddAudioTopic></AddAudioTopic>,
      },
      {
        path: "/report-management",
        element: <ReportManagement></ReportManagement>,
      },
      {
        path: "/make-admin",
        element: <MakeAdmin></MakeAdmin>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/settings",
        element: <Settings></Settings>,
      },
      {
        path: "/settings/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/settings/contact-us",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/settings/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
      {
        path: "/settings/terms-and-condtion",
        element: <TermsAndCondition></TermsAndCondition>,
      },
      {
        path: "/notification",
        element: <Notification></Notification>,
      },

    ]
  },
  {
    path: "/auth/login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/auth/forgot-password",
    element: <ForgotPassword></ForgotPassword>,
  },
  {
    path: "/auth/verification-code",
    element: <VerificationCode></VerificationCode>,
  },
  {
    path: "/auth/set-new-password",
    element: <SetNewPassword></SetNewPassword>,
  },
  {
    path: "/auth/successfully-changed-password",
    element: <SuccessfullyChangedPasswordPage></SuccessfullyChangedPasswordPage>,
  },
]);

export default router;