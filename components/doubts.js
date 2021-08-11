import Image from "next/image";

const styles = {
  container:
    "flex items-center px-5 py-3 rounded-lg shadow-md bg-white border text-gray-500",
  iconContainer: "relative w-12 h-12",
  contentContainer: "flex flex-col ml-4",
  contentTitle: "text-lg font-medium tracking-tight ",
  contentSubTitle: "text-sm font-normal",
};

export default function Doubts() {
  return (
    <section className="py-6 space-y-4">
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt=""
            src="/doubts/shipping-rose.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={[styles.contentTitle, " text-rose-700"]}>
            Fast Shipping
          </div>
          <div className={styles.contentSubTitle}>
            Quick, No-Contact Delivery
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt=""
            src="/doubts/warranty-blue.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={[styles.contentTitle, " text-blue-700"]}>
            2-Year Warranty
          </div>
          <div className={styles.contentSubTitle}>
            On all Telly Smart Gadgets
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt=""
            src="/doubts/refund-indigo.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.contentContainer}>
          <div className={[styles.contentTitle, " text-indigo-700"]}>
            30-Day Money-back Guarantee
          </div>
          <div className={styles.contentSubTitle}>
            Receive a 100% full refund
          </div>
        </div>
      </div>
    </section>
  );
}
