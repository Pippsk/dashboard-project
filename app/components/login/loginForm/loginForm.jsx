"use client";

import styles from "./loginForm.module.css";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <form action={formAction} className={styles.form}>
      <h2>Sign In</h2>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <button>LogIn</button>
      {state && state}
    </form>
  );
};

export default LoginForm;
