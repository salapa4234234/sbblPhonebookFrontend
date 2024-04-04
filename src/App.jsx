import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignupPage from "./pages/signup/Signup.page";
import ContactComponent from "./pages/contacts/Contact.component";
import PersonComponent from "./pages/person/Person.component";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import EditProfile from "./pages/editProfile/EditProfile";
import storage from "./utils/storage";
// import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Verified from "./pages/verify/Verified";
import ForgetPasword from "./pages/forgetPassword/ForgetPasword";
import ForgetUpdatePassword from "./pages/forgetUpdatePassword/ForgetUpdatePassword";

function App() {
  const token = storage.getToken();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (token?.token) {
  //     navigate("/contacts");
  //   } else {
  //     navigate("/");
  //   }
  // }, []);
  return (
    <>
      {token ? (
        <Routes>
          <Route path="/contacts" element={<ContactComponent />} />
          <Route path="/contacts/:id" element={<PersonComponent />} />
          <Route path="/edit_profile/:id" element={<EditProfile />} />
          <Route path="/update_password/:id" element={<UpdatePassword />} />
        </Routes>
      ) : (
        <Routes>
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
        </Routes>
      )}
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
