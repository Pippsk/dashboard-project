import Link from "next/link";
import Image from "next/image";
import Search from "@/app/components/dashboard/searchComponent/searchComponent";
import Pagination from "@/app/components/dashboard/pagination/pagination";
import styles from "@/app/components/dashboard/products/products.module.css";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.png"
                  width={40}
                  height={40}
                  className={styles.productImg}
                />
                Iphone
              </div>
            </td>
            <td>Lorem ipsum dolor sit amet consectetur.</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>

            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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

export default ProductPage;
