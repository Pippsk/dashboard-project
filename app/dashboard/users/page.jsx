import Pagination from "@/app/components/dashboard/pagination/pagination";
import Search from "@/app/components/dashboard/searchComponent/searchComponent";
import styles from "@/app/components/dashboard/users/users.module.css";
import { fetchUsers } from "@/app/lib/data";
import Image from "next/image";

import Link from "next/link";

const UsersPage = async () => {
  const users = await fetchUsers();

  console.log(users);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  width={40}
                  height={40}
                  className={styles.userImg}
                />
                Jhon Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>13.01.2022</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersPage;
