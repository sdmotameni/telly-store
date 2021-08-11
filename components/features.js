const styles = {
  container: "flex items-center",
  title: "font-bold text-md",
  subTitle: "ml-2 text-sm",
};

export default function Features() {
  return (
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
  );
}
