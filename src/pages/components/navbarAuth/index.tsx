import { useRouter } from "next/router";
import styles from "@/pages/components/navbarAuth/styles.module.css";
import ButtonLink from "../buttonLink/buttonLink";

export default function NavbarAuth() {
  const router = useRouter();

  const { pathname } = router;

  return (
    <div className={styles.navbarAuth}>
      {pathname !== "/" && <ButtonLink title="Home" url="/" auth />}
      {pathname !== "/login" && <ButtonLink title="Login" url="/login" auth />}
      {pathname !== "/about" && <ButtonLink title="About" url="/about" auth />}
      {pathname !== "/products" && (
        <ButtonLink title="Products" url="/products" auth />
      )}
      {pathname !== "/auth" && <ButtonLink title="Auth" url="/auth" auth />}
    </div>
  );
}
