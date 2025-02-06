import Background from "./components/Background";
import Form from "./components/Form.jsx";
import logo from "./assets/images/logo-full.svg";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Ticket from "./components/Ticket.jsx";
const App = () => {
  const [avatarImage, setAvatarImage] = useState(null);
  const [githubUsername, setGithubUsername] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  return (
    <div>
      <Background />

      <div className="text-center flex justify-center py-8">
        <img src={logo} alt="logo" className="max-w-[100%]" />
      </div>
      <Routes>
        <Route
          path="/conference-ticket-generator/"
          element={
            <Form
              setAvatarImage={setAvatarImage}
              setGithubUsername={setGithubUsername}
              setUsername={setUsername}
              setEmail={setEmail}
            />
          }
        />
        <Route
          path="/conference-ticket-generator/ticket"
          element={
            <Ticket
              avatarImage={avatarImage}
              githubUsername={githubUsername}
              username={username}
              email={email}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
