import styles from "@/pages/components/buttonModal/styles.module.css";

interface ButtonModal {
  title: string;
  modalAction: () => void;
}

export default function ButtonModal(props: ButtonModal) {
  const { title, modalAction } = props;
  return (
    <button className={styles.buttonModal} onClick={modalAction}>
      {title}
    </button>
  );
}
