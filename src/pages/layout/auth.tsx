import Footer from "../components/footer/footer";
import NavbarAuth from "../components/navbarAuth";
import style from "./styles.module.css";

export default function AuthLayout(page: any) {
  return (
    <>
      <NavbarAuth />
      <div className={style.container}>{page}</div>
      <Footer />
    </>
  );
}
