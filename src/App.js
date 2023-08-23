import ReactDOM from "react-dom/client";
import LogIn from "./component/LogIn";
import ChatPage from "./ChatPage";
import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")
  || false))

  function login(username){
    localStorage.setItem("isLoggedIn", true)
    setIsLoggedIn(true)

  }
  function logout(username){
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)

  }
  return (
    <>
    {isLoggedIn ? <ChatPage logout={logout}/> : <LogIn login={login}/>}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);










    