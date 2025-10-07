import ClientComponent from "@/components/client-component";
import styles from "./page.module.css";
import Servercomponent from "../../components/server-component";

export default function Home() {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
}
