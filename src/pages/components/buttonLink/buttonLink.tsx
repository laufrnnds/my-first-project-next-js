import Link from "next/link";
import styles from "@/pages/components/buttonLink/styles.module.css";

interface ButtonLink {
  title: string;
  url: string;
  auth?: boolean;
}

export default function ButtonLink(props: ButtonLink) {
  const { title, url, auth } = props;
  const buttonClass = auth
    ? `${styles.buttonLinkAuth}`
    : `${styles.buttonLink}`;
  return (
    <div className={buttonClass}>
      <Link href={url}>{title}</Link>
    </div>
  );
}
