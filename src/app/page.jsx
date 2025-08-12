'use client'
import { Suspense, useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";

function HomeContent() {
  const searchParams = useSearchParams();
  const price = searchParams.get("price");
  const refN = searchParams.get("refN");
  const [formattedDateTime, setFormattedDateTime] = useState("");
  const router = useRouter();

  useEffect(() => {
    const dateNow = new Date();
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false, 
    };
    setFormattedDateTime(dateNow.toLocaleString(undefined, options));
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.paymentBox}>
          <div className={styles.boxbox}>
            <span className={styles.amountMain}>{price}</span>
            <div className={styles.amountBox}>
              <span className={styles.amountDecimal}>000.</span>
              <span className={styles.currency}>BHD</span>
            </div>
          </div>
          <div className={styles.names}>
            <p>مطلوب من قبل</p>
            <h5>TAP PAYMENTS EPSP</h5>
          </div>
          <div className={styles.infoss}>
            <p>تاريخ الدفع:</p>
            <p>{formattedDateTime}</p>
          </div>
          <div className={styles.infoss}>
            <p>المرجع:</p>
            <p>{refN}</p>
          </div> 
          <div className={styles.infoss}>
            <p>تفاصيل الدفع:</p>
            <p>دفع فاتورة</p>
          </div>
          <div className={styles.detailsGrid}>
            <button className={styles.aseccuss}>رفض</button>
            <button 
              className={styles.closes} 
              onClick={() => router.push(`/benefitpay?refN=${refN}&price=${price}`)}
            >
              قبول
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
