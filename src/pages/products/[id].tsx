import { useRouter } from "next/router";
import DefaultLayout from "../layout/default";
import styles from "@/styles/styles.module.css";

export default function Product() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Produtc - {router.query.id}</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
        odio id dui consectetur sagittis. Donec volutpat magna vitae erat
        vestibulum vulputate. Curabitur facilisis mauris ac tincidunt iaculis.
        Donec metus elit, vulputate in tellus in, facilisis venenatis elit. In
        ac neque euismod, accumsan nibh non, maximus massa.
      </p>
    </div>
  );
}

Product.getLayout = DefaultLayout;
