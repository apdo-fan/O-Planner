import { useState } from "react";
import Loading from "./Loading";
import CreditTable from "./CreditTable";
import InfoTable from "./InfoTable";
import styles from "./Main.module.css";

export default function Main() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => setIsLoading(false), 3500);
  return (
    <div>
      {isLoading ? ( //로딩 중 이라면 로딩 화면 출력
        <Loading />
      ) : (
        //로딩 완료 시 아래 컴포넌트 출력
        <div className={styles.container}>
          <CreditTable />
          <InfoTable />
        </div>
      )}
    </div>
  );
}
