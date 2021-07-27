import Image from "next/image";

const styles = {
  container: "flex flex-col items-center",
  iconContainer: "relative w-6 h-6",
  text: "text-xs font-base mt-2",
};

export default function HeroListItems() {
  return (
    <div className="flex items-end justify-center mx-6 space-x-4 space-y-2 text-center">
      <div className={styles.container}>
        <div className={styles.iconContainer}>
          <Image
            alt="phone"
            src="/phone-white.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>No App Needed To Connect</p>
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
            src="/pencil-white.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <p className={styles.text}>Customizable Profiles</p>
      </div>
    </div>
  );
}
