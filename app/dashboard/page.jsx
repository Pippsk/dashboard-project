import styles from "../components/dashboard/dashboard.module.css";
import Card from "../components/dashboard/card/card";
import Rightbar from "../components/dashboard/rigthbar/rightbar";
import Transactions from "../components/dashboard/transactions/transactions";
import Chart from "../components/dashboard/chart/chart";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
