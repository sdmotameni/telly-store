import ConnectSVG from "./common/connectsvg";

const styles = {
  titleContainer: "flex items-center mb-4",
  title: "ml-2 text-2xl font-semibold customcolor",
  subTitle: "text-lg",
  icon: "w-8 h-8 fill-current text-white custombg p-1 rounded",
};

export default function Benefits() {
  return (
    <section className="text-gray-800">
      <div className="mb-8 text-3xl font-semibold">
        The New Way To Connect...
      </div>
      <div className="space-y-7">
        <div>
          <div className={styles.titleContainer}>
            <ConnectSVG styles={styles.icon} />
            <div className={styles.title}>Instant Connection</div>
          </div>
          <div className={styles.subTitle}>
            Tap your Telly to the back of anyones smartphone to instantly share
            your profile.
          </div>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <ConnectSVG styles={styles.icon} />
            <div className={styles.title}>Customizable Profiles</div>
          </div>
          <div className={styles.subTitle}>
            Display all your social media accounts and phone contact information
            in an elegant and impressionable way.
          </div>
        </div>
        <div>
          <div className={styles.titleContainer}>
            <ConnectSVG styles={styles.icon} />
            <div className={styles.title}>No App Needed</div>
          </div>
          <div className={styles.subTitle}>
            Telly profiles are viewed directly through a browser making Telly
            compatible with all smartphones.
          </div>
        </div>
      </div>
    </section>
  );
}
