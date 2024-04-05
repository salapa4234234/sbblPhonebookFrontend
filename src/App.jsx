import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignupPage from "./pages/signup/Signup.page";
import ContactComponent from "./pages/contacts/Contact.component";
import PersonComponent from "./pages/person/Person.component";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import EditProfile from "./pages/editProfile/EditProfile";
import { Toaster } from "react-hot-toast";
import Verified from "./pages/verify/Verified";
import ForgetPasword from "./pages/forgetPassword/ForgetPasword";
import ForgetUpdatePassword from "./pages/forgetUpdatePassword/ForgetUpdatePassword";
import PrivateRoutes from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<ContactComponent />} path="/contacts" exact />
          <Route path="/contacts" element={<ContactComponent />} exact />
          <Route path="/contacts/:id" element={<PersonComponent />} exact />
          <Route path="/edit_profile/:id" element={<EditProfile />} exact />
          <Route
            path="/update_password/:id"
            element={<UpdatePassword />}
            exact
          />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/email-verification/:email/varify/:token"
            element={<Verified />}
          />
          <Route path="/forget-password" element={<ForgetPasword />} />
          <Route
            path="/forget-password/:email"
            element={<ForgetUpdatePassword />}
          />
        </Route>
      </Routes>

      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          className: "text-sm",
        }}
      />
    </>
  );
}

export default App;
