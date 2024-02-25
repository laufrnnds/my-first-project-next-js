import styles from "@/styles/styles.module.css";
import DefaultLayout from "../layout/default";
import ButtonModal from "../components/buttonModal";
import Modal from "../components/modal";
import { useState } from "react";

export default function About() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const confirmModal = () => {
    console.log("Fechou");
    closeModal();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus
        odio id dui consectetur sagittis. Donec volutpat magna vitae erat
        vestibulum vulputate. Curabitur facilisis mauris ac tincidunt iaculis.
        Donec metus elit, vulputate in tellus in, facilisis venenatis elit. In
        ac neque euismod, accumsan nibh non, maximus massa. Nam sodales nulla at
        ipsum dapibus, vel varius ligula volutpat. Vivamus viverra est turpis.
      </p>
      <ButtonModal
        title="Open modal About page"
        modalAction={() => setShowModal(!showModal)}
      />
      <Modal
        title="Modal About Page"
        open={showModal}
        content="This is the modal About page"
        actionClose={closeModal}
        actionConfirm={confirmModal}
      />
    </div>
  );
}

About.getLayout = DefaultLayout;
