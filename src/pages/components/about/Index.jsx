import AppearTitle from '@src/components/animationComponents/appearTitle/Index';
import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
import Image from 'next/image';
import clsx from 'clsx';
import { gsap } from 'gsap';
import styles from '@src/pages/components/about/styles/about.module.scss';
import useIsMobile from '@src/hooks/useIsMobile';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';
import { useRef } from 'react';

function About() {
  const profileDescription = [
    'A passionate front-end developer from Algeria. With a strong eye for design and dedication to creating seamless user experiences.',
    'I specialize in bringing web applications to life with clean and efficient code.',
  ].join(' ');
  const isMobile = useIsMobile();
  const rootRef = useRef();
  const animatedImageRef = useRef();

  const setupScrollAnimation = () => {
    const ctx = gsap.context(() => {
      gsap.set(animatedImageRef.current, { top: !isMobile ? '-20vw' : '0' });
      if (!isMobile) {
        gsap.to(animatedImageRef.current, {
          top: '20vw',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            scroller: document?.querySelector('main'),
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return ctx;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = setupScrollAnimation();
    return () => ctx.kill();
  }, [isMobile]);

  const renderImageContainer = () => (
    <div className={styles.imageContainer}>
      <Image priority src="/images/defaults/profilepic.jpg" sizes="100vw" fill alt="Portrait of Amine Azrou, known professionally as ECOD" />
    </div>
  );

  const renderProfileDescription = () => <p className={clsx('h6', styles.profileDescription)}>{profileDescription}</p>;

  return (
    <section ref={rootRef} className={styles.root}>
      <div className={clsx(styles.nameContainer, 'layout-block-inner')}>
        <AppearTitle>
          <h2 className={clsx('h1', 'medium')}>Hey, ECOD here!</h2>
        </AppearTitle>
      </div>

      <div className={clsx(styles.container, 'layout-grid-inner')}>
        {isMobile ? renderImageContainer() : null}
        {isMobile ? renderProfileDescription() : null}
        <div className={clsx(styles.descWrapper)} ref={animatedImageRef}>
          <AppearTitle>
            <div className="p-l">My solo learning journey as a self-taught</div>
            <div className="p-l">developer empowers me to solve problems</div>
            <div className="p-l">creatively and efficiently, supporting the</div>
            <div className="p-l">successful completion of your project goals.</div>
          </AppearTitle>
        </div>
        {!isMobile ? renderImageContainer() : null}
        {!isMobile ? renderProfileDescription() : null}
        <div className={clsx(styles.descWrapperBottom)}>
          <div className={clsx(styles.buttonContainer)}>
            <ButtonLink href="/about" label="ABOUT ME" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
