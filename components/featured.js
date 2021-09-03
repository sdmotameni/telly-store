import Image from "next/image";

const styles = {
  imageContainer: "relative h-14 w-14",
};

export default function Featured() {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="mb-3 text-sm font-medium tracking-wide text-gray-400 uppercase">
        Featured On
      </div>
      <div className="flex space-x-9">
        <div className={styles.imageContainer}>
          <Image
            alt="NBC logo"
            src="/featured/nbc.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="USA Today logo"
            src="/featured/usatoday.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="Fox News logo"
            src="/featured/foxnews.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            alt="CBS logo"
            src="/featured/cbs.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
