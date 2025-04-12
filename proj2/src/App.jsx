import "./App.css";
import { useState } from "react";

function App() {

  const [emailOrUsername, setEmailOrUsername] = useState("");

  const handleSignInWithGoogle = () => {
    // Redirect to the Google login page
    window.location.href = "https://accounts.google.com/signin";
  };

  const handleSignInWithApple = () => {
    // Redirect to the Apple login page
    window.location.href = "https://appleid.apple.com/account";
  };


  return (
    <>
      <div className="centerPage">
        <img src="../twitter.png" alt="" />
        <h2>Sign in to twitter</h2>
        <button className="google" onClick={handleSignInWithGoogle}>
          <img src="../google.png" alt="google" className="googleImg" />
          <p>SIGN IN WITH GOOGLE</p>
        </button>
        <button className="google" onClick={handleSignInWithApple}>
          <img src="../apple.png" alt="google" className="googleImg" />
          <p>SIGN IN WITH APPLE</p>
        </button>
        <h5>
          <span>Or</span>
        </h5>
        <input type="text" placeholder="Phone, email, or username" value={emailOrUsername} onChange={(e)=>setEmailOrUsername(e.target.value)}/>
        <button className="google nxt">
          <p >Next</p>
        </button>
        <button className="google pass">
          <p>Forget Password</p>
        </button>
      <span className="signup">Dont have an account Sign up</span>
      </div>
       
    </>
  );
}

export default App;
