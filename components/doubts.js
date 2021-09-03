import Image from "next/image";

const styles = {
  container:
    "flex items-center px-5 py-3 rounded-lg shadow-md bg-white border text-gray-500 md:h-32",
  iconContainer: "relative w-12 h-12",
  contentContainer: "flex flex-col ml-4",
  contentTitle: "text-lg font-normal tracking-tight text-blue-600",
  contentSubTitle: "text-sm font-normal",
};

export default function Doubts() {
  const genBadge = (svgPath, title, subTitle) => {
    return (
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image alt="" src={svgPath} layout="fill" objectFit="contain" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.contentTitle}>{title}</div>
          <div className={styles.contentSubTitle}>{subTitle}</div>
        </div>
      </div>
    );
  };
  return (
    <section className="flex flex-col py-6 space-y-4 md:space-y-0 md:space-x-5 md:flex md:items-center md:justify-center">
      {genBadge(
        "/doubts/delivery.svg",
        "Fast Shipping",
        "Quick, No-Contact Delivery"
      )}
      {genBadge(
        "/doubts/badge.svg",
        "2-Year Warranty",
        "On all Telly Smart Gadgets"
      )}
      {genBadge(
        "/doubts/check-mark.svg",
        "30-Day Money-back Guarantee",
        "Receive a 100% full refund"
      )}
      <a
        href="https://shop.gettelly.com/products/telly-gadget"
        className="px-4 py-2 mx-12 text-lg font-medium text-center text-white rounded-md shadow-lg bg-cyan-500"
      >
        Choose your Telly device
      </a>
    </section>
  );
}
