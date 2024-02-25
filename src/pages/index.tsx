import { Inter } from "next/font/google";
import styles from "@/styles/styles.module.css";
import DefaultLayout from "./layout/default";
import ButtonModal from "./components/buttonModal";
import { useState } from "react";
import Modal from "./components/modal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmModal = () => {
    console.log("Fechou");
    closeModal();
  };
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Home</h2>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
          odio id dui consectetur sagittis. Donec volutpat magna vitae erat
          vestibulum vulputate. Curabitur facilisis mauris ac tincidunt iaculis.
          Donec metus elit, vulputate in tellus in, facilisis venenatis elit. In
          ac neque euismod, accumsan nibh non, maximus massa.
        </p>
        <ButtonModal
          title="Open modal Home page"
          modalAction={() => setShowModal(!showModal)}
        />
        <Modal
          title="Modal Home Page"
          open={showModal}
          content="This is the modal Home page"
          actionClose={closeModal}
          actionConfirm={confirmModal}
        />
      </div>
    </>
  );
}

Home.getLayout = DefaultLayout;
