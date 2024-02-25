import styles from "@/styles/styles.module.css";
import AuthLayout from "../layout/auth";

export default function Auth() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Auth</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
        odio id dui consectetur sagittis. Donec volutpat magna vitae erat
        vestibulum vulputate. Curabitur facilisis mauris ac tincidunt iaculis.
        Donec metus elit, vulputate in tellus in, facilisis venenatis elit. In
        ac neque euismod, accumsan nibh non, maximus massa. Nam sodales nulla at
        ipsum dapibus, vel varius ligula volutpat. Vivamus viverra est turpis.
      </p>
    </div>
  );
}

Auth.getLayout = AuthLayout;
