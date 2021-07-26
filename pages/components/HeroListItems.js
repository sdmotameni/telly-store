import Image from "next/image";

const styles = {
  container: "flex flex-col items-center md:flex-row",
  iconContainer: "relative w-5 h-5 md:w-7 md:h-7 md:mr-2",
  text: "text-xs md:text-sm opacity-90",
};

export default function HeroListItems() {
  return (
    <div className="flex mt-1 space-y-2 text-center md:flex-col">
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>No App Needed</p>
      </div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>For iPhones & Androids</p>
      </div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>Unlimited Taps</p>
      </div>
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>Customizable Profiles</p>
      </div>
    </div>
  );
}
