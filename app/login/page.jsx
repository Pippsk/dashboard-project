import styles from "@/app/components/login/login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h2>Sign In</h2>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>LogIn</button>
      </form>
    </div>
  );
};

export default LoginPage;
