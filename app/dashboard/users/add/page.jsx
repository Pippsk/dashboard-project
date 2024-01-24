import styles from "@/app/components/dashboard/users/addUser/addUser.module.css";
import { addUser } from "@/app/lib/actions";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" required />

        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          id="address"
          rows="5"
        ></textarea>

        <button type="submit">Add New User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
