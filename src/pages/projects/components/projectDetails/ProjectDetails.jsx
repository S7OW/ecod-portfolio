import ButtonLink from '@src/components/animationComponents/buttonLink/Index';
/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import styles from '@src/pages/projects/components/projectDetails/styles/projectDetails.module.scss';

function ProjectDetails({ project }) {
  return (
    <div className={styles.root}>
      <h1 className={clsx(styles.title, 'h3')}>{project.title}</h1>
      {project.date && <p className={clsx(styles.date, 'h4')}>({project.date})</p>}
      <div className={styles.others}>
        <div className={styles.desc}>
          {project.desc.map((des, index) => (
            <p className="p-l" key={`${project.title}-${index}`}>
              {des}
            </p>
          ))}
        </div>
        {project.stack?.length > 0 && (
          <div className={styles.desc}>
            <h2 className="h4">Project technologies</h2>
            <p className="p-l">{project.stack.join(' · ')}</p>
          </div>
        )}
        {project.liveLink ? (
          <div className={styles.buttonContainer}>
            <ButtonLink target href={project.liveLink} label="VISIT LIVE SITE" ariaLabel={`Visit the live ${project.title} website`} />
          </div>
        ) : null}
        {project.repoLink ? (
          <div className={styles.buttonContainer}>
            <ButtonLink target href={project.repoLink} label="VIEW SOURCE CODE" ariaLabel={`View the ${project.title} source code on GitHub`} />
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default ProjectDetails;
