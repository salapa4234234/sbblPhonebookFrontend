import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignupPage from "./pages/signup/Signup.page";
import ContactComponent from "./pages/contacts/Contact.component";
import PersonComponent from "./pages/person/Person.component";
import UpdatePassword from "./pages/updatePassword/UpdatePassword";
import EditProfile from "./pages/editProfile/EditProfile";
import storage from "./utils/storage";
import { useEffect } from "react";

function App() {
  const token = storage.getToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (token?.token) {
      navigate("/contacts");
    } else {
      navigate("/");
    }
  }, []);
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
        </Routes>
      )}
    </>
  );
}

export default App;
