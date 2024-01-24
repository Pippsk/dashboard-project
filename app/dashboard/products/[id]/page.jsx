import styles from "@/app/components/dashboard/products/singleProduct/singleProduct.module.css";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Iphone
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder={product.title}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder={product.price}
            className={styles.numberInput}
          />
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder={product.stock}
            className={styles.numberInput}
          />
          <label htmlFor="color">Color</label>
          <input
            type="text"
            id="color"
            name="color"
            placeholder={product.color}
          />
          <label htmlFor="size">Size</label>
          <textarea
            name="size"
            type="text"
            id="size"
            rows="1"
            placeholder={product.size}
          />

          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="10"
            placeholder={product.description}
          ></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
