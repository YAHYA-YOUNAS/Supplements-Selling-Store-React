import React, { useState } from "react";
import Input from "../Input/Input";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Username or Email Address"
          type="email"
          value={email}
          setValue={setEmail}
        />

        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />

        <div className={styles.end}>
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              value="checked"
              checked={isChecked}
              onChange={(e) => setIsChecked(!isChecked)}
            />
            <span> Remember Me</span>
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
