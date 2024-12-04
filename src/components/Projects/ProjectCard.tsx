import styles from "./ProjectCard.module.css";

const ProjectCard = ({ project }: any) => {
  return (
    <div className={styles.container}>
      <img src={"/assets/" + project.imageSrc} className={styles.image}></img>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill: string, id: any) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a
          href={project.demo}
          target="_blank"
          className={`${styles.link} ${
            project.demo.length === 0 && styles.disabledLink
          }`}
        >
          Demo
        </a>
        <a
          href={project.source}
          target="_blank"
          className={`${styles.link} ${
            project.source.length === 0 && styles.disabledLink
          }`}
        >
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
