import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<ContactComponent />} path="/contacts" exact />
          <Route element={<ContactComponent />} path="/contacts/:id" exact />
          <Route path="/contacts" element={<ContactComponent />} />
          <Route path="/contacts/:id" element={<PersonComponent />} />
          <Route path="/edit_profile/:id" element={<EditProfile />} />
          <Route path="/update_password/:id" element={<UpdatePassword />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route element={<LoginPage />} path="/" />
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
