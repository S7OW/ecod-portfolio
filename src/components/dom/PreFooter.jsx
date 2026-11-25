import FruitNinja from '@src/components/dom/prefooter/Index';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import styles from '@src/components/dom/styles/preFooter.module.scss';

function PreFooter() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { root: document.querySelector('main'), threshold: 0.01 });
    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={clsx(styles.root, 'layout-block-inner')}>
      <div className={styles.textsContainer}>
        <div>
          <h2 className="h1">Start your project</h2>
          <h2 className="h1">with a trusted partner</h2>
          <h2 className="h1">now!</h2>
        </div>
      </div>

      <div className={styles.canvas}>{isVisible && <FruitNinja />}</div>
    </section>
  );
}

export default PreFooter;
