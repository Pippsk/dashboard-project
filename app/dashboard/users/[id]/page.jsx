import styles from "@/app/components/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Jhon Doe
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="jhon Doe"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="jhonDoe@yahoo.com"
          />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            placeholder="+40726208634"
          />
          <label htmlFor="address">Address</label>
          <textarea name="address" type="text" id="address" rows="5" />
          <label htmlFor="isAdmin">Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
