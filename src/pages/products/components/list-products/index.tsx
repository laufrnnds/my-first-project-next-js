import styles from "@/pages/products/components/list-products/styles.module.css";

interface Product {
  id: number;
  name: string;
  category: string;
}

interface ListProductsProps {
  products: Product[];
}

export default function ListProducts({ products }: ListProductsProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>List Products</h1>
      <ul className={styles.list}>
        {products.map((product) => {
          return (
            <li key={product.id} className={styles.item}>
              {product.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
