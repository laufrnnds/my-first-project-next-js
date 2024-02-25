import { useRouter } from "next/router";
import styles from "@/pages/components/navbar/styles.module.css";
import ButtonLink from "../buttonLink/buttonLink";

export default function Navbar() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className={styles.navbar}>
      {pathname !== "/" && <ButtonLink title="Home" url="/" />}
      {pathname !== "/login" && <ButtonLink title="Login" url="/login" />}
      {pathname !== "/about" && <ButtonLink title="About" url="/about" />}
      {pathname !== "/products" && (
        <ButtonLink title="Products" url="/products" />
      )}
      {pathname !== "/auth" && <ButtonLink title="Auth" url="/auth" />}
    </div>
  );
}
