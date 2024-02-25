import styles from "@/pages/components/modal/styles.module.css";
import ButtonModal from "../buttonModal";

interface ModalProps {
  open: boolean;
  actionClose: () => void;
  actionConfirm: () => void;
  title: string;
  content: string;
  labelConfirm?: string;
}

export default function Modal({
  open,
  actionClose,
  title,
  content,
  labelConfirm,
  actionConfirm,
}: ModalProps) {
  if (!open) {
    return "";
  }
  const label = labelConfirm || "Confirmar";
  return (
    <div className={styles.container}>
      <div className={styles.containerModal}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{content}</p>
        <div className={styles.containerButtons}>
          <ButtonModal title="Cancelar" modalAction={actionClose} />
          <ButtonModal title={label} modalAction={actionConfirm} />
        </div>
      </div>
    </div>
  );
}
