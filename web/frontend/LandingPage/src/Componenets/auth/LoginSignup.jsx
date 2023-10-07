import React, { useState } from "react";
import * as Components from "./Components";

function LoginSignup() {
  const [signIn, toggleSignIn] = useState(true);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3500/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: fName,
          lastName: lName,
          email,
          username,
          password: pass,
        }),
      });

      if (response.status === 201) {
        // Registration successful
        console.log("Registration successful");
        // Redirect or perform any other actions you need here
      } else {
        // Registration failed
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3500/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password: pass,
        }),
      });

      if (response.status === 200) {
        // Login successful
        console.log("Login successful");
        window.location.href = `http://localhost:3000/user?name=${username}`

        // Redirect or perform any other actions you need here
      } else if (response.status === 401) {
        // Invalid username or password
        console.error("Invalid username or password");
      } else {
        // Login failed
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Components.Container>
      <Components.SignUpContainer signinIn={signIn}>
        <Components.Form onSubmit={handleRegistration}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input
            type="text"
            placeholder="First Name"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
          />
          <Components.Input
            type="text"
            placeholder="Last Name"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
          />
          <Components.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Components.Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email.."
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Components.Button>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signinIn={signIn}>
        <Components.Form onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <Components.Input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Components.Anchor href="#">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signinIn={signIn}>
        <Components.Overlay signinIn={signIn}>
          <Components.LeftOverlayPanel signinIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your personal info
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggleSignIn(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signinIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter Your personal details and start the journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggleSignIn(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
}

export default LoginSignup;
