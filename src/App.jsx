import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignupPage from "./pages/signup/Signup.page";
import ContactComponent from "./pages/contacts/Contact.component";
import PersonComponent from "./pages/person/Person.component";
import storage from "./utils/storage";
import { useEffect } from "react";

function App() {
  const token = storage.getToken();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
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
