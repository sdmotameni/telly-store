import Image from "next/image";

const styles = {
  container: "flex flex-col items-center",
  iconContainer: "relative w-5 h-5",
  text: "text-xs opacity-90",
};

export default function HeroListItems() {
  return (
    <div className="flex mt-1 space-y-2 text-center">
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone-white.png"
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
            src="/phone-white.png"
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
            src="/phone-white.png"
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
            src="/phone-white.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>Customizable Profiles</p>
      </div>
    </div>
  );
}
