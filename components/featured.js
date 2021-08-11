import Image from "next/image";

const styles = {
  imageContainer: "relative h-12 w-12",
};

export default function Featured() {
  return (
    <section className="flex flex-col items-center py-10">
      <div className="mb-3 text-sm font-medium tracking-wide text-gray-400 uppercase">
        Featured And Previously Seen On
      </div>
      <div className="flex space-x-9">
        <div className={styles.imageContainer}>
          <Image
            alt="NBC logo"
            src="/featured/logonbc.svg"
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

/*

const styles = {
  container: "flex items-center",
  title: "font-bold text-md",
  subTitle: "ml-2 text-sm",
};




    <section className="flex flex-col px-3 py-8 space-y-3 text-blue-900">
      <div className={styles.container}>
        <div className={styles.title}>Easy Setup</div>
        <div className={styles.subTitle}>3-minute quick DIY setup</div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Universal</div>
        <div className={styles.subTitle}>
          Only 1 person needs a Telly to connect
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>24/7 Support</div>
        <div className={styles.subTitle}>Access to dedicated support</div>
      </div>
    </section>

*/
