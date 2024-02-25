import Footer from "../components/footer/footer";
import Navbar from "../components/navbar";
import style from "./styles.module.css";

export default function DefaultLayout(page: any) {
  return (
    <>
      <Navbar />
      <div className={style.container}>{page}</div>
      <Footer />
    </>
  );
}
