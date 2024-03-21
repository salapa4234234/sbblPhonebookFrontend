import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/login.page";
import SignupPage from "./pages/signup/Signup.page";
import ContactComponent from "./pages/contacts/Contact.component";
import PersonComponent from "./pages/person/Person.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/contacts" element={<ContactComponent />} />
      <Route path="/contacts/:id" element={<PersonComponent />} />
    </Routes>
  );
}

export default App;
