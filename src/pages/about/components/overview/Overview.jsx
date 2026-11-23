import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import clsx from 'clsx';
import styles from '@src/pages/about/components/overview/styles/overview.module.scss';

function Overview() {
  return (
    <section className={clsx(styles.root, 'layout-grid-inner')}>
      <div className={styles.title}>
        <AppearTitle>
          <h3 className="h3">Learning by building, exploring networks, and solving problems.</h3>
        </AppearTitle>
      </div>
      <div className={clsx(styles.text, 'p-l', styles.myStory)}>
        <AppearTitle>
          <span>About me</span>
        </AppearTitle>
      </div>
      <div className={styles.desc}>
        <AppearTitle>
          <p className="h6">I&apos;m Amine Azrou, a self-taught Frontend Developer and Cisco Network Designer with a strong passion for technology, web development, networking, and cybersecurity.</p>
          <p className={clsx(styles.paddingTop, 'h6')}>
            I enjoy building modern, interactive web experiences and exploring how computer networks are designed, configured, and secured. Through independent learning and hands-on projects,
            I&apos;ve been developing my skills in frontend technologies and Cisco networking, combining creativity with technical problem-solving.
          </p>
          <p className={clsx(styles.paddingTop, 'h6')}>
            Currently studying accounting while pursuing my passion for technology, I&apos;m continuously expanding my knowledge and working toward becoming an independent freelancer, collaborating on
            meaningful projects and turning ideas into practical solutions.
          </p>
          <div className={clsx(styles.paddingTop, 'h6')}>
            <strong>Experience:</strong> Beginner, self-taught; approximately 1 year of learning and practical experience.
          </div>
          <div className={clsx(styles.paddingTop, 'h6')}>
            <strong>Education:</strong> Currently studying accounting.
          </div>
          <div className={clsx(styles.paddingTop, 'h6')}>
            <strong>Languages:</strong> English, French, and Arabic.
          </div>
          <div className={clsx(styles.paddingTop, 'h6')}>
            <strong>Interest:</strong> Cybersecurity.
          </div>
        </AppearTitle>
      </div>
    </section>
  );
}

export default Overview;
