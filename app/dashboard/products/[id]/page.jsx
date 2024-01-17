import styles from "@/app/components/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" placeholder="jhon Doe" />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="jhonDoe@yahoo.com"
          />
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" name="stock" placeholder="23" />
          <label htmlFor="color">Color</label>
          <input type="text" id="color" name="color" />
          <label htmlFor="size">Size</label>
          <textarea name="size" type="text" id="size" rows="1" />

          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option selected>Select category</option>
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder="Description"
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
